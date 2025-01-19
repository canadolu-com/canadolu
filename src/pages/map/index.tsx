import { useCallback, useEffect, useMemo, useState } from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  MarkerClusterer as GoogleMarkerClusterer,
} from "@react-google-maps/api";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Clock,
  Globe,
  Navigation,
  Store,
  Utensils,
  Heart,
  Users,
  Briefcase,
  Filter,
} from "lucide-react";
import type { Location, LocationCategory } from "@/lib/types";
import { transformListingsToLocations } from "@/lib/utils/listings";

const mapContainerStyle = {
  width: "100%",
  height: "calc(100vh - 400px)",
  minHeight: "600px",
};

const center = {
  lat: 43.6532,
  lng: -79.3832, // Toronto coordinates
};

const categories: Array<{
  id: LocationCategory;
  label: string;
  icon: React.ReactNode;
  description: string;
}> = [
  {
    id: "restaurant",
    label: "Restoranlar",
    icon: <Utensils className="h-4 w-4" />,
    description: "Türk restoranları, kafeler ve yemek yerleri",
  },
  {
    id: "market",
    label: "Marketler",
    icon: <Store className="h-4 w-4" />,
    description: "Türk bakkalları ve gıda marketleri",
  },
  {
    id: "health",
    label: "Sağlık",
    icon: <Heart className="h-4 w-4" />,
    description: "Tıp klinikleri ve sağlık merkezleri",
  },
  {
    id: "community",
    label: "Topluluk",
    icon: <Users className="h-4 w-4" />,
    description: "Kültür merkezleri ve topluluk kuruluşları",
  },
  {
    id: "services",
    label: "Hizmetler",
    icon: <Briefcase className="h-4 w-4" />,
    description: "Profesyonel ve iş hizmetleri",
  },
];

const options = {
  imagePath:
    "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
};

export default function MapPage() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<LocationCategory>("restaurant");
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [isMapReady, setIsMapReady] = useState(false);

  // Load listings data
  useEffect(() => {
    const loadListings = async () => {
      try {
        const transformedListings = await transformListingsToLocations();
        setLocations(transformedListings);
      } catch (error) {
        console.error("Error loading listings:", error);
      }
    };
    loadListings();
  }, []);

  // Update cities based on available locations
  const cities = useMemo(
    () => [
      {
        name: "Tüm Şehirler",
        value: "all",
        icon: <MapPin className="h-4 w-4" />,
        center: { lat: 43.6532, lng: -79.3832 },
      },
      ...Array.from(new Set(locations.map((loc) => loc.city)))
        .filter(Boolean)
        .map((cityName) => {
          const cityLocation = locations.find((loc) => loc.city === cityName);
          return {
            name: cityName,
            value: cityName,
            icon: <MapPin className="h-4 w-4" />,
            center: cityLocation?.coordinates || {
              lat: 43.6532,
              lng: -79.3832,
            },
          };
        }),
    ],
    [locations]
  );

  const handleMapLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
    setIsMapReady(true);
  }, []);

  // Marker icons configuration
  const markerIcons = useMemo(() => {
    if (!isLoaded) return null;

    return {
      default: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: "#4F46E5",
        fillOpacity: 1,
        strokeWeight: 1,
        strokeColor: "#FFFFFF",
        scale: 8,
      },
      selected: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: "#DC2626",
        fillOpacity: 1,
        strokeWeight: 2,
        strokeColor: "#FFFFFF",
        scale: 10,
      },
    };
  }, [isLoaded]);

  const filteredLocations = useMemo(() => {
    let filtered = locations.filter(
      (location) => location.category === selectedCategory
    );
    if (selectedCity !== "all") {
      filtered = filtered.filter((location) => location.city === selectedCity);
    }
    return filtered;
  }, [locations, selectedCategory, selectedCity]);

  const handleMarkerClick = useCallback(
    (location: Location) => {
      if (!map || !isMapReady) return;

      // Toggle selection if clicking the same location
      if (selectedLocation?.id === location.id) {
        setSelectedLocation(null);
        return;
      }

      setSelectedLocation(location);

      if (location.coordinates) {
        map.panTo(location.coordinates);
        map.setZoom(12);

        // Use requestAnimationFrame to ensure the DOM is ready
        requestAnimationFrame(() => {
          const card = document.getElementById(`location-${location.id}`);
          if (card) {
            card.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
        });
      }
    },
    [map, selectedLocation, isMapReady]
  );

  // Add function to open Google Maps
  const openInGoogleMaps = useCallback((location: Location) => {
    if (!location.address) return;

    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${location.name} ${location.address}`
    )}`;
    window.open(url, "_blank");
  }, []);

  useEffect(() => {
    if (map && isMapReady) {
      const bounds = new google.maps.LatLngBounds();
      let hasValidLocations = false;

      if (filteredLocations.length > 0) {
        filteredLocations.forEach((location) => {
          if (
            location.coordinates &&
            typeof location.coordinates.lat === "number" &&
            typeof location.coordinates.lng === "number"
          ) {
            bounds.extend(location.coordinates);
            hasValidLocations = true;
          }
        });

        if (hasValidLocations) {
          try {
            const padded = new google.maps.LatLngBounds(
              new google.maps.LatLng(
                bounds.getSouthWest().lat() - 0.1,
                bounds.getSouthWest().lng() - 0.1
              ),
              new google.maps.LatLng(
                bounds.getNorthEast().lat() + 0.1,
                bounds.getNorthEast().lng() + 0.1
              )
            );
            map.fitBounds(padded);
          } catch (error) {
            console.error("Error fitting bounds:", error);
            map.setCenter(center);
            map.setZoom(10);
          }
        } else {
          map.setCenter(center);
          map.setZoom(10);
        }
      } else {
        const selectedCityData = cities.find(
          (city) => city.value === selectedCity
        );
        if (selectedCityData?.center) {
          map.setCenter(selectedCityData.center);
          map.setZoom(12);
        } else {
          map.setCenter(center);
          map.setZoom(10);
        }
      }
    }
  }, [filteredLocations, map, selectedCity, cities, isMapReady]);

  if (loadError) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-[600px] bg-brand-bg-light">
          <div className="text-brand-text-primary text-lg">
            Harita yüklenirken bir hata oluştu. Lütfen daha sonra tekrar
            deneyin.
          </div>
        </div>
      </MainLayout>
    );
  }

  if (!isLoaded) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-[600px] bg-brand-bg-light">
          <div className="text-brand-text-primary text-lg">Yükleniyor...</div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-brand-primary mb-4">
            Türk Mekanlarını Bul
          </h1>
          <p className="text-xl text-brand-text-secondary">
            Çevrenizdeki Türk işletmelerini, hizmetlerini ve topluluk
            merkezlerini keşfedin
          </p>
        </div>

        {/* Combined Filters Section */}
        <div className="mb-8">
          <div className="bg-brand-snow-white border border-brand-border-light rounded-lg p-4">
            <div className="grid md:grid-cols-[300px_1fr] gap-6">
              {/* City Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-brand-primary" />
                    <h3 className="text-brand-text-primary font-medium">
                      Konum Seç
                    </h3>
                  </div>
                  <div className="text-brand-text-secondary text-sm">
                    {filteredLocations.length} mekan
                  </div>
                </div>

                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="w-full bg-white text-gray-900">
                    <SelectValue placeholder="Şehir seçin">
                      {cities.find((city) => city.value === selectedCity)
                        ?.name || "Şehir seçin"}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.value} value={city.value}>
                        <div className="flex items-center">
                          {city.icon}
                          <span className="ml-2">{city.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Category Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Filter className="h-5 w-5 text-brand-primary" />
                    <h3 className="text-brand-text-primary font-medium">
                      Kategori Seç
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => {
                    const categoryCount = locations.filter(
                      (loc) =>
                        loc.category === category.id &&
                        (selectedCity === "all"
                          ? true
                          : loc.city === selectedCity)
                    ).length;

                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`
                          flex items-center gap-2 px-4 py-2 rounded-lg
                          transition-all duration-200 
                          ${
                            selectedCategory === category.id
                              ? "bg-brand-primary text-white shadow-sm"
                              : "bg-brand-bg-light text-brand-text-primary hover:bg-brand-bg-light/80"
                          }
                          ${
                            categoryCount === 0
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }
                        `}
                        disabled={categoryCount === 0}
                      >
                        <div className="flex items-center gap-2">
                          {category.icon}
                          <span className="text-sm font-medium">
                            {category.label}
                          </span>
                        </div>
                        <span
                          className={`text-xs ml-2 ${
                            selectedCategory === category.id
                              ? "text-white/90"
                              : "text-brand-text-secondary"
                          }`}
                        >
                          ({categoryCount})
                        </span>
                      </button>
                    );
                  })}
                </div>

                {categories.find((cat) => cat.id === selectedCategory)
                  ?.description && (
                  <p className="mt-2 text-sm text-brand-text-secondary">
                    {
                      categories.find((cat) => cat.id === selectedCategory)
                        ?.description
                    }
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Map and Details Section */}
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  zoom={10}
                  center={center}
                  onLoad={handleMapLoad}
                  options={{
                    styles: [
                      {
                        featureType: "poi",
                        elementType: "labels",
                        stylers: [{ visibility: "off" }],
                      },
                    ],
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                  }}
                >
                  {isMapReady && (
                    <GoogleMarkerClusterer options={options}>
                      {(clusterer) => (
                        <>
                          {filteredLocations
                            .filter(
                              (location) =>
                                location.coordinates &&
                                typeof location.coordinates.lat === "number" &&
                                typeof location.coordinates.lng === "number"
                            )
                            .map((location) => (
                              <Marker
                                key={location.id}
                                position={location.coordinates}
                                onClick={() => handleMarkerClick(location)}
                                clusterer={clusterer}
                                icon={
                                  markerIcons
                                    ? selectedLocation?.id === location.id
                                      ? markerIcons.selected
                                      : markerIcons.default
                                    : undefined
                                }
                                animation={
                                  selectedLocation?.id === location.id
                                    ? google.maps.Animation.BOUNCE
                                    : undefined
                                }
                              />
                            ))}
                        </>
                      )}
                    </GoogleMarkerClusterer>
                  )}
                </GoogleMap>
              </CardContent>
            </Card>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto px-0.5">
            {filteredLocations.length === 0 ? (
              <Card>
                <CardContent className="p-4">
                  <p className="text-brand-text-secondary text-center">
                    Bu kategoride mekan bulunamadı.
                  </p>
                </CardContent>
              </Card>
            ) : (
              filteredLocations.map((location) => (
                <Card
                  key={location.id}
                  id={`location-${location.id}`}
                  className={`transition-all cursor-pointer ${
                    selectedLocation?.id === location.id
                      ? "shadow-md bg-brand-primary/5"
                      : "hover:shadow-sm hover:translate-y-[-2px] hover:bg-gray-50/50"
                  }`}
                  onClick={() => handleMarkerClick(location)}
                >
                  <CardHeader
                    className={`py-3 ${
                      selectedLocation?.id === location.id
                        ? "border-b border-brand-primary/20"
                        : ""
                    }`}
                  >
                    {selectedLocation?.id === location.id ? (
                      // Selected card header
                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-2">
                            <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-brand-primary" />
                            <div>
                              <CardTitle className="text-lg text-brand-primary font-medium">
                                {location.name}
                              </CardTitle>
                              <div className="flex items-center gap-2 text-sm text-brand-text-secondary mt-1">
                                <Navigation className="h-4 w-4" />
                                <span>
                                  {location.address
                                    ? location.address.split(",")[0]
                                    : "Adres belirtilmemiş"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Unselected card header - minimal version
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 flex-shrink-0 text-brand-text-secondary" />
                          <div>
                            <h3 className="font-medium text-brand-text-primary">
                              {location.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-0.5">
                              {location.hours && location.hours.monday && (
                                <span className="text-xs text-brand-text-secondary flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {location.hours.monday.split("-")[0].trim()}
                                </span>
                              )}
                              {location.phone && (
                                <span className="text-xs text-brand-text-secondary flex items-center gap-1">
                                  <Phone className="h-3 w-3" />
                                  Available
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        {location.tags && location.tags.length > 0 && (
                          <span className="text-xs px-2 py-0.5 bg-brand-bg-light text-brand-text-secondary rounded-full whitespace-nowrap">
                            {location.tags[0]}
                          </span>
                        )}
                      </div>
                    )}
                  </CardHeader>

                  {selectedLocation?.id === location.id && (
                    <CardContent className="py-3 space-y-4">
                      {location.description && (
                        <p className="text-sm text-brand-text-secondary border-b pb-3">
                          {location.description}
                        </p>
                      )}

                      <div className="space-y-3">
                        {location.address && (
                          <div className="flex items-start gap-2">
                            <Navigation className="h-5 w-5 mt-1 flex-shrink-0 text-brand-primary" />
                            <div>
                              <p className="text-brand-text-primary">
                                {location.address}
                              </p>
                              <p className="text-sm text-brand-text-secondary">
                                {location.city}
                              </p>
                            </div>
                          </div>
                        )}

                        {location.phone && (
                          <a
                            href={`tel:${location.phone}`}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-brand-text-primary hover:text-brand-primary transition-colors"
                          >
                            <Phone className="h-5 w-5 text-brand-primary" />
                            <span>{location.phone}</span>
                          </a>
                        )}

                        {location.website && (
                          <a
                            href={location.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-brand-text-primary hover:text-brand-primary transition-colors"
                          >
                            <Globe className="h-5 w-5 text-brand-primary" />
                            <span>Visit Website</span>
                          </a>
                        )}

                        {location.hours && (
                          <div className="flex items-start gap-2">
                            <Clock className="h-5 w-5 mt-1 flex-shrink-0 text-brand-primary" />
                            <div className="flex-1">
                              <div className="text-sm font-medium text-brand-text-primary mb-1">
                                Hours
                              </div>
                              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                                {Object.entries(location.hours).map(
                                  ([day, hours]) => (
                                    <div key={day} className="contents">
                                      <span className="capitalize text-brand-text-secondary">
                                        {day}
                                      </span>
                                      <span className="text-brand-text-primary">
                                        {hours}
                                      </span>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        )}

                        {location.tags && location.tags.length > 1 && (
                          <div className="flex flex-wrap gap-1 pt-1">
                            {location.tags.slice(1).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 bg-brand-bg-light text-brand-text-secondary text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center justify-between pt-2 mt-2 border-t">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleMarkerClick(location);
                            }}
                            className="text-sm text-brand-primary hover:text-brand-primary/80 flex items-center gap-1"
                          >
                            <MapPin className="h-4 w-4" />
                            Haritada Göster
                          </button>
                          {location.address && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                openInGoogleMaps(location);
                              }}
                              className="text-sm text-brand-primary hover:text-brand-primary/80 flex items-center gap-1"
                            >
                              <Globe className="h-4 w-4" />
                              Google Maps&apos;te Aç
                            </button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

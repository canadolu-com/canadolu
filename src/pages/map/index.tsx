import { useCallback, useEffect, useMemo, useState } from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  MarkerClusterer as GoogleMarkerClusterer,
} from "@react-google-maps/api";
import MainLayout from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Location, LocationCategory } from "@/lib/types";
import { locations } from "@/lib/data/locations";
import { Button } from "@/components/ui/button";

const mapContainerStyle = {
  width: "100%",
  height: "calc(100vh - 400px)",
  minHeight: "600px",
};

const center = {
  lat: 43.6532,
  lng: -79.3832, // Toronto coordinates
};

const cities = [
  {
    name: "All Cities",
    value: "all",
    icon: <MapPin className="h-4 w-4" />,
    center: { lat: 43.6532, lng: -79.3832 }, // Toronto center as default
  },
  {
    name: "Toronto",
    value: "Toronto",
    icon: <MapPin className="h-4 w-4" />,
    center: { lat: 43.6532, lng: -79.3832 },
  },
  {
    name: "North York",
    value: "North York",
    icon: <MapPin className="h-4 w-4" />,
    center: { lat: 43.7615, lng: -79.4111 },
  },
  {
    name: "Vaughan",
    value: "Vaughan",
    icon: <MapPin className="h-4 w-4" />,
    center: { lat: 43.8563, lng: -79.5085 },
  },
  {
    name: "Barrie",
    value: "Barrie",
    icon: <MapPin className="h-4 w-4" />,
    center: { lat: 44.3894, lng: -79.6903 },
  },
];

const categories: Array<{
  id: LocationCategory;
  labelKey: string;
  icon: React.ReactNode;
  description: string;
}> = [
  {
    id: "restaurant",
    label: "Restaurants",
    icon: <Utensils className="h-4 w-4" />,
    description: "Turkish restaurants, cafes, and eateries",
  },
  {
    id: "market",
    label: "Markets",
    icon: <Store className="h-4 w-4" />,
    description: "Turkish grocery stores and food markets",
  },
  {
    id: "health",
    label: "Healthcare",
    icon: <Heart className="h-4 w-4" />,
    description: "Medical clinics and wellness centers",
  },
  {
    id: "community",
    label: "Community",
    icon: <Users className="h-4 w-4" />,
    description: "Cultural centers and community organizations",
  },
  {
    id: "services",
    label: "Services",
    icon: <Briefcase className="h-4 w-4" />,
    description: "Professional and business services",
  },
];

const options = {
  imagePath:
    "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
};

export default function MapPage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const [selectedCategory, setSelectedCategory] =
    useState<LocationCategory>("restaurant");
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [selectedCity, setSelectedCity] = useState("all");
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const filteredLocations = useMemo(() => {
    let filtered = locations.filter(
      (location) => location.category === selectedCategory
    );
    if (selectedCity !== "all") {
      filtered = filtered.filter((location) => location.city === selectedCity);
    }
    return filtered;
  }, [selectedCategory, selectedCity]);

  const handleMarkerClick = useCallback(
    (location: Location) => {
      setSelectedLocation(location);
      if (map && location.coordinates) {
        map.panTo(location.coordinates);
        map.setZoom(12);
      }
    },
    [map]
  );

  useEffect(() => {
    if (map) {
      const bounds = new google.maps.LatLngBounds();

      if (filteredLocations.length > 0) {
        filteredLocations.forEach((location) => {
          bounds.extend(location.coordinates);
        });

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
      } else {
        const selectedCityData = cities.find(
          (city) => city.value === selectedCity
        );
        if (selectedCityData) {
          map.setCenter(selectedCityData.center);
          map.setZoom(12);
        }
      }
    }
  }, [filteredLocations, map, selectedCity]);

  if (!isLoaded) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-[600px] bg-brand-bg-light">
          <div className="text-brand-text-primary text-lg">Loading map...</div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-brand-primary mb-4">
            Find Turkish Locations
          </h1>
          <p className="text-lg text-brand-text-secondary">
            Discover Turkish restaurants, markets, and services in the Greater
            Toronto Area
          </p>
        </div>

        {/* Combined Filters Section */}
        <div className="mb-8">
          <div className="bg-brand-snow-white border border-brand-border-light rounded-lg p-4">
            <div className="space-y-6">
              {/* City Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-brand-primary" />
                    <h3 className="text-brand-text-primary font-medium">
                      Select Location
                    </h3>
                  </div>
                  <div className="text-brand-text-secondary text-sm">
                    {filteredLocations.length} locations found
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                  {cities.map((city) => {
                    const cityCount = locations.filter((loc) =>
                      city.value === "all" ? true : loc.city === city.value
                    ).length;

                    return (
                      <button
                        key={city.value}
                        onClick={() => setSelectedCity(city.value)}
                        className={`
                          flex flex-col items-center justify-center p-3 rounded-lg
                          transition-all duration-200 
                          ${
                            selectedCity === city.value
                              ? "bg-brand-primary text-brand-snow-white shadow-sm"
                              : "bg-brand-bg-light text-brand-text-primary hover:bg-brand-bg-light/80"
                          }
                        `}
                      >
                        {city.icon}
                        <span className="text-sm font-medium mt-1">
                          {city.name}
                        </span>
                        <span
                          className={`text-xs mt-1 ${
                            selectedCity === city.value
                              ? "text-brand-snow-white/90"
                              : "text-brand-text-secondary"
                          }`}
                        >
                          {cityCount}{" "}
                          {cityCount === 1 ? "location" : "locations"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Category Selection */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="h-5 w-5 text-brand-primary" />
                  <h3 className="text-brand-text-primary font-medium">
                    Filter by Category
                  </h3>
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
                              ? "bg-brand-primary text-brand-snow-white shadow-sm"
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
                          className={`text-xs ${
                            selectedCategory === category.id
                              ? "text-brand-snow-white/90"
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
                  onLoad={setMap}
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
                  <GoogleMarkerClusterer options={options}>
                    {(clusterer) => (
                      <>
                        {filteredLocations.map((location) => (
                          <Marker
                            key={location.id}
                            position={location.coordinates}
                            onClick={() => handleMarkerClick(location)}
                            clusterer={clusterer}
                          />
                        ))}
                      </>
                    )}
                  </GoogleMarkerClusterer>
                </GoogleMap>
              </CardContent>
            </Card>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            {selectedLocation && (
              <Card>
                <CardHeader className="pb-2 border-b">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 mt-1 text-brand-primary flex-shrink-0" />
                      <div>
                        <CardTitle className="text-lg text-brand-primary">
                          {selectedLocation.name}
                        </CardTitle>
                        {selectedLocation.description && (
                          <p className="text-sm text-brand-text-secondary mt-1">
                            {selectedLocation.description}
                          </p>
                        )}
                      </div>
                    </div>
                    {selectedLocation.tags &&
                      selectedLocation.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 justify-end ml-2">
                          {selectedLocation.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 bg-brand-bg-light text-brand-text-secondary text-xs rounded-full whitespace-nowrap"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                  </div>
                </CardHeader>
                <CardContent className="max-h-[calc(100vh-500px)] overflow-y-auto">
                  <div className="space-y-3 py-2">
                    <div className="flex items-start gap-2">
                      <Navigation className="h-5 w-5 mt-1 flex-shrink-0 text-brand-primary" />
                      <div>
                        <p className="text-brand-text-primary">
                          {selectedLocation.address}
                        </p>
                        <p className="text-sm text-brand-text-secondary">
                          {selectedLocation.city}
                        </p>
                      </div>
                    </div>

                    {selectedLocation.phone && (
                      <a
                        href={`tel:${selectedLocation.phone}`}
                        className="flex items-center gap-2 text-brand-text-primary hover:text-brand-primary transition-colors"
                      >
                        <Phone className="h-5 w-5 text-brand-primary" />
                        <span>{selectedLocation.phone}</span>
                      </a>
                    )}

                    {selectedLocation.website && (
                      <a
                        href={selectedLocation.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-brand-text-primary hover:text-brand-primary transition-colors"
                      >
                        <Globe className="h-5 w-5 text-brand-primary" />
                        <span>Visit Website</span>
                      </a>
                    )}

                    {selectedLocation.hours && (
                      <div className="flex items-start gap-2">
                        <Clock className="h-5 w-5 mt-1 flex-shrink-0 text-brand-primary" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-brand-text-primary mb-1">
                            Hours
                          </div>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                            {Object.entries(selectedLocation.hours).map(
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

                    {selectedLocation.tags &&
                      selectedLocation.tags.length > 2 && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {selectedLocation.tags.slice(2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 bg-brand-bg-light text-brand-text-secondary text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

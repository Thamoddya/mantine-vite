export const parsePlaceResult = (place: google.maps.places.PlaceResult) => {
    const components = place.address_components;
    const getComponent = (type:string) => components?.find((component) => component.types.includes(type))?.long_name || "";
    return {
      street_Address: `${getComponent("street_number")} ${getComponent("route")}`.trim(),
      suburb: getComponent("locality"),
      state: getComponent("administrative_area_level_1"),
      postalCode: getComponent("postal_code"),
      country: getComponent("country"),
      location: {
        type: "Point",
        coordinates: [
          place.geometry?.location?.lng() || 0,
          place.geometry?.location?.lat() || 0,
        ],
      },
      isDefault:false,
    };
}
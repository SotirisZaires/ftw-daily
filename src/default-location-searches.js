import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-athensatticca',
    predictionPlace: {
      address: 'Athens, Attica',
      bounds: new LatLngBounds(new LatLng(38.140799, 23.905911), new LatLng(37.789208,23.556408)),
    },
  },
];

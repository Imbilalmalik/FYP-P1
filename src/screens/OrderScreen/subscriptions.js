export const onOrderUpdated = /* GraphQL */ `
  subscription OnOrderUpdated($id: ID!) {
    onOrderUpdated(id: $id) {
      id
      createdAt
      type
      status
      originLatitude
      oreiginLongitude
      destLatitude
      destLongitude
      userId
      providerId
      updatedAt
    }
  }
`;
export const onProviderUpdated = /* GraphQL */ `
  subscription OnProviderUpdated($id: ID!) {
    onProviderUpdated(id: $id) {
      id
      type
      latitude
      longitude
      heading
      isActive
      userId
      createdAt
      updatedAt
    }
  }
`;
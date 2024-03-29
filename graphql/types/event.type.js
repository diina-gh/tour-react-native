import { gql, useQuery } from "@apollo/client";

export const EventsQuery = gql`
    query Events($page: Int, $take: Int, $filter: EventFilterInput, $orderBy: EventOrderInput) {
        __typename
        events(page: $page, take: $take, filter: $filter, orderBy: $orderBy) {
            count
            events {
                id
                name
                desc
                organizedBy
                activated
                address
                date
                startHours
                endHours
                latitude
                longitude
                organizedBy
                createdat
                updatedat
                ticketPrice
                categoryEventId
                categoryEvent {
                    id
                    name
                    desc
                }
                images {
                    id
                    imageref
                    url
                }
            }
        }
    }
`
;

export const EventQuery = gql`
    query Event($id: Int) {
        event(id: $id) {
            __typename
            ... on InputError{
                message
            }
            ... on Event {
                id
                name
                desc
                organizedBy
                activated
                address
                date
                startHours
                endHours
                latitude
                longitude
                organizedBy
                createdat
                updatedat
                ticketPrice
                categoryEventId
                categoryEvent {
                    id
                    name
                    desc
                }
                images {
                    id
                    imageref
                    url
                }
            }
        }
    }
`
;

export const SaveEventMutation = gql`
    mutation SaveEvent($id: Int, $name: String, $desc: String, $activated: Boolean, $date: String, $startHours: String, $endHours: String, $categoryEventId: Int, $latitude: String, $longitude: String, $address: String, $organizedBy: String) {
        saveEvent(id: $id, name: $name, desc: $desc, activated: $activated, date: $date, startHours: $startHours, endHours: $endHours, categoryEventId: $categoryEventId, latitude: $latitude, longitude: $longitude, address: $address, organizedBy: $organizedBy) {
            __typename
            ... on InputError{
                message
            }
            ... on Event {
                id
                name
                desc
                activated
                address
                date
                startHours
                endHours
                latitude
                longitude
                organizedBy
                createdat
                updatedat
            }
        }
    }
`;

export const DeleteEventMutation = gql`
    mutation DeleteEvent($id: Int) {
        deleteEvent(id: $id) {
            __typename
            ... on Event {
                id
                name
                desc
                activated
                address
                date
                startHours
                endHours
                latitude
                longitude
                organizedBy
                createdat
                updatedat
            }
            ... on InputError {
                message
            }
        }
    }
`;

export  function getEvents (page, take, filter, orderBy) {
    const { data, loading, error } = useQuery(EventsQuery, {variables: { page, take, filter,orderBy },});
    return {eventsData: data, eventsLoading: loading, eventsError: error}
}
export const userData = async () => {
    const response = await fetch("/users.json")
    const data = response.json();
    return data;

}

export const eventData = async () => {
    const response = await fetch("/events.json")
    const data = response.json();
    return data;
}

export const eventDetails = async (id) => {
    const response = await fetch("/events.json")
    const data = await response.json();
    const eventData = data.find(ele => ele.id == id.substring(1))

    return eventData;
}
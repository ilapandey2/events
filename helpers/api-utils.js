export const getAllEvents=async()=>{
    const response= await fetch("https://nextjs-56e5e-default-rtdb.firebaseio.com/events.json")
    const data= await response.json();
console.log("data", data)
    const events=[];

    for(const key in data){
        events.push({
            id:key,
            ...data[key]
        })
    }
    return events;

    }
    export const getFeaturedEvents=async()=>{
        const allEvents= await getAllEvents();
        console.log("yy", allEvents)
        return allEvents.filter((event)=>event.isFeatured) 
    }
    export async function getEventById(id) {
        const allEvents= await getAllEvents();
        return allEvents.find((event) => event.id === id);
      }

      
  export async function getFilteredEvents(dateFilter) {
    
    const { year, month } = dateFilter;
  
    const allEvents= await getAllEvents();
    let filteredEvents = allEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }

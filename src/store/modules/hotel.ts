import axios from "axios";

export default {
    state: {
        hotels: [],
    },
    mutations: {
        SET_HOTELS_TO_STATE: (state: { hotels: any; }, hotels: any) => {
            state.hotels = hotels;
        },
        // SET_HOTEL: (state: { thing: any[]; }, hotel: { article: any; }) => {
        //     let isHotelExists = false;
        //     if(state.thing.length){
        //         state.thing.map(function(item) {
        //             if(item.article === hotel.article) {
        //                 isHotelExists = true;
        //                 item.quantity++
        //             }
        //         })
        //         if(!isHotelExists) {
        //             state.thing.push(hotel)
        //         }
        //     }else {
        //         state.thing.push(hotel)
        //     }
            
        // },
    },
    actions: {
        GET_HOTELS_FROM_API(ctx:{commit: any}) {
            return axios('http://localhost:3004/hotels',{
                method: "GET"
            })
                .then((hotels) => {
                    ctx.commit('SET_HOTELS_TO_STATE', hotels.data)
                    return hotels;
                  
                })
                .catch((error)=> {
                    console.log(error)
                    return error;
                })
        },

    },
    getters: {
        HOTELS(state: { hotels: any; }) {
            return state.hotels;
          },
    },
}



using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using HotelApi.Models;

namespace HotelApi.Services {
    
    public class HotelService {
        
        private readonly List<Hotel> hotels;

        public HotelService() {   
            hotels = getHotels();
        }

        public List<Hotel> getHotels() {
            try {
                var jsonData = File.ReadAllText("data/hotels.json");  
                var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
                return JsonSerializer.Deserialize<List<Hotel>>(jsonData, options);
            } catch (Exception ex) {
                throw new Exception("An unexpected error occurred while retrieving hotels.", ex);
            }
        }

        public Hotel getHotelById(int id) {
            return hotels.Find(hotel => hotel.Id == id);
        }
    }
}

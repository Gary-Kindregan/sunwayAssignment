using Microsoft.AspNetCore.Mvc;
using HotelApi.Models;
using HotelApi.Services;

namespace HotelApi.Controllers {
    [ApiController]
    [Route("api/hotels")]
    public class HotelsController : ControllerBase {
        private readonly HotelService hotelService;

        public HotelsController() {
            hotelService = new HotelService();
        }

        [HttpGet]
        public IActionResult getHotels() {
            Thread.Sleep(1000);
            try {
                return Ok(hotelService.getHotels());
            } catch (Exception ex) {
                return StatusCode(500, new { Message = "An error occurred while retrieving hotel data.", Details = ex.Message });
            }
        }

        [HttpGet("{id}")]
        public IActionResult getHotelById(int id) {
            Thread.Sleep(1000);
            try {
                var hotel = hotelService.getHotelById(id);
                if(hotel == null) {
                    return NotFound(new { Message = $"A hotel with the id \'{id}\' does not exist." });
                }
            
                return Ok(hotel);
            } catch (Exception ex) {
                return StatusCode(500, new { Message = $"An error occurred while retrieving the hotel details for hotel with id \'{id}\'.", Details = ex.Message });
            }
        }
    }
}

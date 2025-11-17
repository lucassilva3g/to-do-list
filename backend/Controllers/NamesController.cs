using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NamesController : ControllerBase
    {
        private readonly AppDbContext _db;

        public NamesController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult GetNames()
        {
            return Ok(_db.Names.ToList());
        }

        [HttpPost]
        public IActionResult AddName(Name name)
        {
            _db.Names.Add(name);
            _db.SaveChanges();
            return Ok(name);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteName(int id)
        {
            var name = _db.Names.Find(id);
            if (name == null)
                return NotFound();

            _db.Names.Remove(name);
            _db.SaveChanges();
            return NoContent();
        }
    }
}

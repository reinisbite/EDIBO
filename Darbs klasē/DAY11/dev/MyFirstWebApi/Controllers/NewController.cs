using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace MyFirstWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NewController : ControllerBase
    {
        //Get api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] {"July", "2020", "EDIBO"};
        }
           
        //Get api/values/5
        [HttpGet("{id}")]
        public ActionResult<string>Get(int id)
        {
        return "My value";
        }

        //Post api/values
          [HttpPost]

        public void Post([FromBody] string value)
        {
        }

        //PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        //DELETE api/values/5
         [HttpDelete("{id}")]
         public void Delete(int id)
        {
        }
    }
}
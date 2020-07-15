using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace MyFirstWebApi.Controllers

{
    [Route("value")]
[ApiController]

public class MyValuesController : ControllerBase
{//GET api/myvalues
[HttpGet]

public ActionResult<IEnumerable<string>> GetAction()
{
    return new string[] {"July", "2020", "EDIBO", "RTU"};
}}}
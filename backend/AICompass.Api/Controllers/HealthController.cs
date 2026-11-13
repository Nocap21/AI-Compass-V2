using Microsoft.AspNetCore.Mvc;

namespace AICompass.Api.Controllers;

[ApiController]
[Route("api/health")]
public sealed class HealthController : ControllerBase
{
    [HttpGet]
    [ProducesResponseType<HealthResponse>(StatusCodes.Status200OK)]
    public ActionResult<HealthResponse> Get()
    {
        return Ok(new HealthResponse("Healthy", "AI Compass V2 API"));
    }
}

public sealed record HealthResponse(string Status, string Application);

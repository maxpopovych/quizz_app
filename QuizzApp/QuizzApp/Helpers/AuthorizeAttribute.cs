using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using QuizzApp.Models;

/// <summary>
/// Class with authorize attribute
/// </summary>
[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
public class AuthorizeAttribute : Attribute, IAuthorizationFilter
{
    /// <summary>
    /// This method call when the user tries to authorization
    /// </summary>
    public void OnAuthorization(AuthorizationFilterContext context)
    {
        User user = (User)context.HttpContext.Items["User"];
        if (user == null)
        {

            // not logged in
            context.Result = new JsonResult(new { message = "Unauthorized" }) { StatusCode = StatusCodes.Status401Unauthorized };
        }

    }
}
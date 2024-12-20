var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials(); 
    });
});

builder.Services.AddControllers();
var app = builder.Build();

app.UseStaticFiles();
app.UseCors("AllowReactApp"); 
app.UseHttpsRedirection();
app.MapControllers();
app.Run();
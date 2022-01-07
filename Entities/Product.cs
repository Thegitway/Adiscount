namespace Adiscount.Entities;

public class Product
{
    public int id { get; set; }
    public int? pictureId { get; set; }
    public string? info { get; set; }
    
    public string? unite { get; set; }
    public double? price { get; set; }
    public string? category { get; set; }
}
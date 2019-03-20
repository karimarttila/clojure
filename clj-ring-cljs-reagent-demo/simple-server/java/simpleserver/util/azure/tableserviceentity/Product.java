package simpleserver.util.azure.tableserviceentity;

public class Product extends com.microsoft.azure.storage.table.TableServiceEntity {

    private String title;
    private String price;
    private String aorD;
    private String year;
    private String country;
    private String gorL;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getAorD() {
        return aorD;
    }

    public void setAorD(String aorD) {
        this.aorD = aorD;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getGorL() {
        return gorL;
    }

    public void setGorL(String gorL) {
        this.gorL = gorL;
    }
}

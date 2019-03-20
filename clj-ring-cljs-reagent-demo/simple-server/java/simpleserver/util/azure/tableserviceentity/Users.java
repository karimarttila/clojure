package simpleserver.util.azure.tableserviceentity;

public class Users extends com.microsoft.azure.storage.table.TableServiceEntity {

    private String lastname;
    private String firstname;
    private String hpwd;

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getHpwd() {
        return hpwd;
    }

    public void setHpwd(String hpwd) {
        this.hpwd = hpwd;
    }
}

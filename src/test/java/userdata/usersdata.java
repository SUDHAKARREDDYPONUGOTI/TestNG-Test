package userdata;

/**
 * @author Sudhakar
 *
 */
public class usersdata {
	
	public Integer id ;
	public String email;
	public String firstname;
	public String lastname;
	public String avatar;
	public String password;
	
	public String getPassword() {
		return this.password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "usersdata [getId()=" + this.getId() + ", getEmail()=" + this.getEmail() + ", getFirstname()="
				+ this.getFirstname() + ", getLastname()=" + this.getLastname() + ", getAvatar()=" + this.getAvatar()
				+ "]";
	}
	public Integer getId() {
		return this.id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getEmail() {
		return this.email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFirstname() {
		return this.firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return this.lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getAvatar() {
		return this.avatar;
	}
	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}
	
	

}

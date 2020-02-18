import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Blogdata} from './blog';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class  BlogsdataService {

  constructor(private route: Router, private http: HttpClient) { }
  httpoptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'

    })
  };
  gethomedata() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.get<Blogdata[]>('http://localhost:9090/blog/get', {headers});
  }
  getblogbyid(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.get<Blogdata[]>('http://localhost:9090/blog/get/' + id, {headers });
  }
  getblogbywriter(writer) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.get<Blogdata[]>('http://localhost:9090/blog/get/writer/' + writer, {headers });
  }
  getblogbycategory(cat) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.get<Blogdata[]>('http://localhost:9090/blog/get/cat/' + cat, {headers});
  }
  addblog(blogdata: Blogdata) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.post('http://localhost:9090/blog/add', blogdata, {headers});
  }
  getusersblog(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token, 'Content-Type' : 'application/json'});
    return this.http.get('http://localhost:9090/userblogs/userblog/addblog/blog/' + id, {headers});
  }
  myblogs() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:9090/userblogs/myblog', {headers});
  }
  deleteblogbyuser(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:9090/userblogs/myblog/deleteblog/' + id, {headers});
  }
  deleteblogbyId(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:9090/blog/delete/' + id, {headers});
  }
  editblogbyId(id, bdata: Blogdata) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.put<Blogdata[]>('http://localhost:9090/blog/updateblog/' + id, bdata,{headers});
  }

      // {
      //   'name': 'Blog1',
      //   'img' : 'assets/images/blog1d.jpg',
      //   'heading' : 'Airtel Xstream Fiber Offers 1 Gbps Speed For Rs 3,999: 3 Reasons Why This Is Disruptive',
      //   'category': 'Techonology',
      //   'writer' : 'Mohul Ghosh',
      //   'lastupdated' : 'Nov 5,2019',
      //   'detail1' : 'French IT behemoth Capgemini has decided to terminate 500 Indian employees, and the reason is slow business growth.\n' +
      //     '\n' + 'The management has clearly indicated that 2020 ' +
      //     'looks gloomy, and this indirectly means that ' +
      //     'more employees can be fired in the coming days.',
      //   'h1' : 'Capgemini Terminates 500 Employees',
      //   'detailh1' : 'It seems that 2019 will be remembered best for IT layoffs. After Cognizant confirmed 16,000 terminations, and Infosys said that 12,000+ employees will be fired, its the turn of Capgemini to take the layoff route, in order to sustain themselves.\n' +
      //     '\n' +
      //     'Capgemini is going to terminate 500 Indian employees, and the reason is that several of their projects have been scaled back.\n' +
      //     '\n' +
      //     'Capgemini has around 1 lakh employees in India, which is 50% of their global workforce. They have campuses in Bengaluru, Hyderabad, Gurgaon, Ahmedabad, Bhubaneswar, Chennai, Pune, Salem, Trichy, Mumbai and Kolkata.\n' +
      //     '\n' +
      //     'It is not yet clear, employees from which locations are being terminated.',
      //   'h2' : 'The Reason For Capgemini Layoffs',
      //   'detailh2' : 'In a statement, Capgemini has stated that their global workforce increased by 5.1% in the last year, but they admitted that ‘departures’ are part of the process.'
      //   +'\n Their statement said, “.. As with any large company in our industry, there is a constant flow of departures, reskilling, reassignments and arrivals..'
      //   +'\n As per reports available, several projects handled by Capgemini has been scaled back, and this can be the primary reason for firing 500 employees.'
      //     +'\n Around 27% of revenues generated by Capgemini comes from financial services, and they serve 9 of the top 15 banks, globally. '
      //   +'\n Besides, they have reduced the growth outlook for 2019, to 5.5%, which is at the lower end of what they announced in February.'
      // },
      // {
      //   'name': 'Blog2',
      //   'img' : 'assets/images/blog2d.jpg',
      //   'heading' : 'HDFC Bank Explains How UPI Fraud Is Committed; Issues Alerts On How To Avoid UPI Frauds',
      //   'category': 'Business',
      //   'writer' : 'Malvika Gurung',
      //   'lastupdated' : 'Nov 5,2019'
      // },
      // {
      //   'name': 'Blog3',
      //   'img' : 'assets/images/blog3d.jpg',
      //   'heading' : 'Xiaomi, Samsung, Google Pixel Smartphones Can Be Hacked Via Remote Access; No Security Patch Available',
      //   'category': 'Internet',
      //   'writer' : 'Sheetal Bhalerao',
      //   'lastupdated': 'Oct 7,2019'
      // },
      // {
      //   'name': 'Blog4',
      //   'img' : 'assets/images/blog4d.jpg',
      //   'heading' : 'Dream11 Becomes India’s 1st Gaming Unicorn: 3 Stages Of This Billion-Dollar Startup You Should Know',
      //   'category': 'Startup',
      //   'writer' : 'Mohul Ghosh',
      //   'date' : 'April 9,2019'
      // },
      // {
      //   'name': 'Blog5',
      //   'img' : 'assets/images/blog5d.jpg',
      //   'heading' : 'Microsoft’s Productivity Increased 40% By Opting 4-Day Work Week! Can This Happen In India?',
      //   'category': 'Business',
      //   'writer' : 'Radhika Kajarekar',
      //   'lastupdated' : 'Nov 5,2019'
      // },
      // {
      //   'name': 'Blog6',
      //   'img' : 'assets/images/blog6d.jpg',
      //   'heading' : 'Capgemini Fires 500 Indian Employees; Here Is The Reason Why',
      //   'category': 'Business',
      //   'writer' : 'Radhika Kajarekar',
      //   'lastupdated' : 'Nov 7, 2019'
      // }

}

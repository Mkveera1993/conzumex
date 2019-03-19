# conzumex
Test Application for Conzumex

Steps to install Nodejs (v8)<br>
----------------------------<br>
$ cd ~ <br>
$ curl -sL https://deb.nodesource.com/setup_8.10 -o nodesource_setup.sh<br>
$ sudo bash nodesource_setup.sh<br>
$ sudo apt-get install nodejs<br>
$ nodejs -v<br>
it should print "8.10.0"<br>

Steps to install MongoDB (3.4+)<br>
----------------------------<br>

$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927<br>
$ echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list<br>
$ sudo apt-get update<br>
$ sudo apt-get install -y mongodb-org<br>
$ sudo systemctl start mongod<br>
$ sudo systemctl status mongod <br>
it should print "mongod.service" Active:active

Steps to setup Application (Local)<br>
----------------------------<br>
1.Clone Application from git<br>
2.navigate to root folder of sourceCode<br>
3.Run cmd "sudo npm install"<br>
4.Run cmd "npm start"<br>
then access http://localhost:3000/ url<br>

Steps to setup Application (Docker)<br>
----------------------------<br>
1.Clone Application from git<br>
2.navigate to root folder of sourceCode<br>
3.Run cmd " sudo docker build -t conzumex . "<br>
3.Run cmd "sudo docker run --env DB_HOST=<192.168.0.4> -p 3000:3000 conzumex:latest" //replace your mongodb host ip<br>
then access http://localhost:3000/ url <br>

NOTES
=======<br>
1.Please seedData.js file for username and password list <br>
2.whenever application starts new data set will be created,so please drop the "conzumex" DB before start the application<br>
3.when you logged in successfully,in the response token will come.<br>
4.please add header for authenticated api's like "x-access-token: LOGIN SUCCESS TOKEN" //please replace login response token<br>

                                                                    
 






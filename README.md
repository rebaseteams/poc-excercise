1. To check linting errors run command `npm run lint`
2. To build the project run command `npm run build`
3. To run test cases run command `npm run test`
4. To start the server locally run command `npm run start`
5. To run loadtest first install `jmeter` to your system 
   and run command `npm run loadtest`
6. To run the application with docker :
    - Build image with command `docker build -t image_name .`
    - Run the image with command `docker run -d -p 3000:3000 image_name`
    - Now the application should be available on `localhost:3000`
7. To check the swagger documentation visit `localhost:3000/api-docs`
8. Working of the application :
    - two endpoints are provided [POST] `/convert/file/`
    and [GET] `/convert/file/{filename}`
    - [POST] `/convert/file` must have csv file attachment with field name `file`
    - [POST] `/convert/file` will return file name if converted successfully
    - [GET] `/convert/file/{filename}` replace {filename} with the file name received from previous endpoint
    - [GET] `/convert/file/{filename}` will return the text/csv file if successful
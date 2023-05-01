# <p align="center">Greenbook

<p align="center">
<img src=https://badges.frapsoft.com/os/v2/open-source.svg?v"/>
<img src=https://visitor-badge.glitch.me/badge?page_id=bishnudev1.greenbook"/>
<img src="https://img.shields.io/github/license/bishnudev1/greenbook"/>
<img src="https://img.shields.io/github/stars/bishnudev1/greenbook"/>
<img src="https://img.shields.io/github/forks/bishnudev1/greenbook"/>
<img src="https://img.shields.io/badge/Contributors-Welcome-orange"/>
<img src="https://img.shields.io/static/v1?label=%F0%9F%8C%9F&message=If%20Useful&style=style=flat&color=BC4E99" alt="Star Badge"/>
</p>

## Techstack
### Frontend
- React JS & Chakra-UI

### Backend
- Node JS

### Database
- MongoDB Atlas

### State Management
- Redux Toolkit

### 3rd Party Services
- Cloudinary
- Mailport
- Razorpay

## Installation
- Star and fork the repo
- Now clone the repo and open with github desktop
- Install the dependencies in both <b>Client</b> & <b>Server</b> directory by
```bash
  npm i
```
### Environment Variables needs to be added
- PORT
- MONGO_URI
- SECRET_KEY
- CLOUDINARY_CLOUD_NAME
- CLOUDINARY_API_KEY
- CLOUDINARY_API_SECRET
- SMTP_HOST
- SMTP_USER
- SMTP_PORT
- SMTP_PASS

- Run the project using in both <b>Client</b> & <b>Server</b> directory by 
```bash
  npm start
```
### Start the docker container for API testing
```bash
docker run -p greenbook 5000:5000
```

### API Endpoints

| User Endpoint | Url |
| --- | --- |
| Base | /api/v1 |
| User Profile | /api/v1/me |
| Register | /api/v1/register |
| Login | /api/v1/login |
| Logout | /api/v1/logout |
| Update Profile | /api/v1/update-profile |
| Forget Password | /api/v1/forget-password |
| Reset Password | /api/v1/reset-password/:token |
| Update DP | /api/v1/update-dp |

| Article Endpoint | Url |
| --- | --- |
| All Articles | /api/v1/blogs |
| Article | /api/v1/blog/:id |
| Create Article | /api/v1/create-blog |
| Delete Article | /api/v1/delete-blog/:id |

| Other Endpoint | Url |
| --- | --- |
| Contact | /api/v1/contact |


### Note that this project is still far from done. I'm still working in it and have a plan for future. Feel free to contribute in. Thank you 🙂.

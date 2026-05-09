# Tanu Papad Backend

This backend is added in a separate `backend/` folder. The existing website files in the main folder are kept as-is.

## Run

```bash
cd backend
npm install
npm start
```

Open:

- Customer website: http://localhost:3000
- Admin panel: http://localhost:3000/admin.html
- API health: http://localhost:3000/api/health

## Admin login for API

```text
Username: admin
Password: 1234
```

## Backend flow available

1. Send OTP: `POST /api/otp/send`
2. Verify OTP: `POST /api/otp/verify`
3. Save order as `Pending Admin Approval`: `POST /api/orders`
4. Admin approve/reject/update status
5. Customer track order: `GET /api/orders/track/:orderIdOrMobile`

## Important

Current frontend files are unchanged exactly as provided. They still use the existing static/localStorage behavior. To make the frontend use these APIs, connect the existing form actions to the endpoints above.

# TRACK-AI

Shipping tracking application for managing air, sea, and road shipments.

## Features

- Multi-modal shipment tracking (air, sea, road)
- Special fields for sea shipments (container number, B/L number, vessel info)
- Form validation
- RESTful API

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp env.example .env
```

3. Configure your `.env` file with appropriate values.

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

## Testing

Run tests:
```bash
npm test
```

## API Endpoints

### Create Shipment
```
POST /api/shipments
```

Example payload for sea shipment:
```json
{
  "shipment_type": "sea",
  "reference_no": "REF123",
  "container_number": "CONT1234567",
  "bl_number": "BL999",
  "vessel_name": "MSC GULSUN",
  "voyage_number": "VOY001"
}
```

### Update Shipment
```
PUT /api/shipments/:id
```

## Project Structure

```
.
├── backend/
│   ├── app.ts              # Express app configuration
│   ├── server.ts           # Server entry point
│   ├── routes/             # API routes
│   ├── models/             # Data models
│   └── migrations/         # Database migrations
├── frontend/
│   └── components/         # React components
├── tests/                  # Test files
└── docs/                   # Documentation
```

## Documentation

See the `docs/` directory for additional documentation:
- [CSV Template](docs/CSV_TEMPLATE.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [Git Secrets Policy](docs/GIT_SECRETS_POLICY.md)
- [GitHub Setup](docs/GITHUB_SETUP.md)

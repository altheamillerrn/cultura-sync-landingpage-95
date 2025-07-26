# Security Configuration Guide

## Webhook Configuration

### GoHighLevel Webhook Setup

To enable form submissions, you need to configure the webhook URL in `src/components/ConsultationForm.tsx`:

1. **Get your GoHighLevel webhook URL**:
   - Log into your GoHighLevel account
   - Navigate to Settings → Integrations → Webhooks
   - Create a new webhook for lead capture
   - Copy the webhook URL

2. **Update the application**:
   ```typescript
   // In src/components/ConsultationForm.tsx, replace:
   const webhookUrl = process.env.NODE_ENV === 'production' 
     ? "https://services.leadconnectorhq.com/hooks/REPLACE_WITH_ACTUAL_WEBHOOK_ID"
     : "https://services.leadconnectorhq.com/hooks/dev-webhook-placeholder";
   
   // With your actual webhook URL:
   const webhookUrl = "https://services.leadconnectorhq.com/hooks/YOUR_ACTUAL_WEBHOOK_ID";
   ```

## Security Features Implemented

### 1. Content Security Policy (CSP)
- Restricts script execution to prevent XSS attacks
- Allows only trusted external resources (Google Calendar, fonts)
- Configured in `index.html`

### 2. Anti-Spam Protection
- **Honeypot field**: Hidden form field that bots typically fill out
- **Rate limiting**: Maximum 3 submissions per 20 seconds
- **Input validation**: Server-side validation for all form fields

### 3. Data Protection
- Form data is sanitized before submission
- Honeypot field is excluded from webhook payload
- No sensitive data is logged or exposed

### 4. Error Handling
- Generic error messages prevent information disclosure
- Fallback contact methods provided when form fails
- No technical details exposed to users

## Security Headers

The following security headers are configured:

- `Content-Security-Policy`: Prevents XSS and code injection
- `X-Content-Type-Options`: Prevents MIME sniffing attacks  
- `X-Frame-Options`: Prevents clickjacking
- `Referrer-Policy`: Controls referrer information

## Production Deployment Checklist

- [ ] Replace webhook URL with actual GoHighLevel endpoint
- [ ] Test form submission with real webhook
- [ ] Verify CSP doesn't block any required resources
- [ ] Test rate limiting functionality
- [ ] Confirm error handling provides appropriate fallbacks
- [ ] Review all external integrations (Google Calendar iframe)

## Monitoring and Maintenance

### Regular Security Checks
1. Monitor webhook endpoint logs for unusual activity
2. Review form submission patterns for spam attempts
3. Update dependencies regularly for security patches
4. Test CSP configuration after any third-party integrations

### Contact Information Security
- Email addresses are validated but not stored locally
- Phone numbers are formatted but not processed beyond submission
- All PII is transmitted directly to GoHighLevel webhook

## Support

For security questions or to report vulnerabilities:
- Email: contact@culturasync.com
- LinkedIn: linkedin.com/in/althea-miller/

Last updated: January 2025
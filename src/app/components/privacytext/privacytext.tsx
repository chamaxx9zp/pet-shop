import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PrivacyPolicy = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Introduction</Card.Title>
              <Card.Text>
                Welcome to Our Pet Shop. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or purchase our products. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </Card.Text>

              <Card.Title>Information We Collect</Card.Title>
              <Card.Text>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</Card.Text>

              <Card.Title>1. Personal Data</Card.Title>
              <Card.Text>
                - Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
                <br />
                - If you choose to share data about yourself via your profile, online chat, or other interactive areas of the Site, please be advised that all data you disclose in these areas is public and your data will be accessible to anyone who accesses the Site.
              </Card.Text>

              <Card.Title>2. Derivative Data</Card.Title>
              <Card.Text>
                - Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
              </Card.Text>

              <Card.Title>3. Financial Data</Card.Title>
              <Card.Text>
                - Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor, and you are encouraged to review their privacy policy and contact them directly for responses to your questions.
              </Card.Text>

              <Card.Title>4. Mobile Device Data</Card.Title>
              <Card.Text>
                - Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the Site from a mobile device.
              </Card.Text>

              <Card.Title>Use of Your Information</Card.Title>
              <Card.Text>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                <ul>
                  <li>Create and manage your account.</li>
                  <li>Process your transactions and send you related information, including purchase confirmations and invoices.</li>
                  <li>Deliver the products and services you request.</li>
                  <li>Improve the operation of the Site and your customer experience.</li>
                  <li>Send you marketing and promotional communications.</li>
                  <li>Respond to your comments, questions, and requests and provide customer service.</li>
                  <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                  <li>Notify you of updates to the Site.</li>
                  <li>Protect against fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
                </ul>
              </Card.Text>

              <Card.Title>Disclosure of Your Information</Card.Title>
              <Card.Text>
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </Card.Text>

              <Card.Title>1. By Law or to Protect Rights</Card.Title>
              <Card.Text>
                If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
              </Card.Text>

              <Card.Title>2. Third-Party Service Providers</Card.Title>
              <Card.Text>
                - We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
              </Card.Text>

              <Card.Title>3. Business Transfers</Card.Title>
              <Card.Text>
                - We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
              </Card.Text>

              <Card.Title>4. Affiliates</Card.Title>
              <Card.Text>
                - We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.
              </Card.Text>

              <Card.Title>5. Marketing Communications</Card.Title>
              <Card.Text>
                - With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.
              </Card.Text>

              <Card.Title>Security of Your Information</Card.Title>
              <Card.Text>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;

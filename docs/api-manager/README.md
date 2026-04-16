# API Manager

The **API Manager** is a centralized tool for managing and distributing API collections across workspaces. It provides features for creating, publishing, and managing APIs, ensuring efficient access control, enhanced security, and streamlined client interactions.

### 1.Create & Publish API Collections

1. **Create an API Collection**

&#x20;• Navigate to Settings from the left sidebar and click on Create Collections.

<img src={require('../../assets/images/image (36).png').default} />

• Fill in the collection details, select the API paths for the workflows, and click Create.

<img src={require('../../assets/images/image (37).png').default} />

2\. View and Publish the Collection

The created collection will appear on the API Collections page. Click on the collection name to navigate to the Publish API Collections section.

<img src={require('../../assets/images/image (38).png').default} />

• Click Publish to Manager to publish the API collection.

<img src={require('../../assets/images/image (39).png').default} />

3\. Update the Collection&#x20;

&#x20; To update the collection, click the Edit button, make the necessary changes, and click Update.

<img src={require('../../assets/images/image (40).png').default} />

• After updating, remember to republish the collection by clicking Publish to Manager again.

<img src={require('../../assets/images/image (41).png').default} />

### 2.API Manager Features

Once an API is published, it becomes available across the organization.

#### 1. View Published Collections

Published collections are accessible on the API Collections page within the API Manager.

<img src={require('../../assets/images/image (42).png').default} />

2\. Create and Invite Clients

&#x20; To create a new client, navigate to the Clients page in the API Manager and click Create Client.

<img src={require('../../assets/images/image (43).png').default} />

• Fill in the required details and click Create to create a client.

<img src={require('../../assets/images/image (44).png').default} />

• The new client will be listed on the Clients page.

<img src={require('../../assets/images/image (45).png').default} />

#### 2. Create Access Profile

&#x20; To create an access profile, click on the client name and navigate to the Create Access Profiles page.

<img src={require('../../assets/images/image (46).png').default} />

• Add profile details, select the API collections, and click Create.

<img src={require('../../assets/images/image (47).png').default} />

• After creating the access profile, copy the client ID and secret to request an access token for API authentication.

<img src={require('../../assets/images/image (48).png').default} />

#### &#x20; 3. Generate Access Tokens

&#x20; Access the Create Access Profiles page to view and manage tokens.

<img src={require('../../assets/images/image (49).png').default} />

• Click the + icon to view the client ID and secret, and to generate an access token.

<img src={require('../../assets/images/image (50).png').default} />

• To refresh the client secret, click Refresh.

<img src={require('../../assets/images/image (51).png').default} />

• To generate an access token, click Generate Access Token, paste the client secret, and click Generate. Copy the generated access token for secure API calls.

<img src={require('../../assets/images/image (52).png').default} />

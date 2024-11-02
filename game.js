let usersData = [];
let qrSprite;
let spinButton;
let spinNumber = 0;
let spinNumberText;
let baseUrl = "https://uat-api-loyalty.therealreward.com";
let token = "";
let dataRewards = [
  {
    name: "iPhone 15",
    photo:
      "https://loyalty-prime-s3.s3.ap-southeast-1.amazonaws.com/resources/images/d43897ce-f97a-45d5-addb-890a1b31a25f.jpg",
    ref: "LR274173964622341875",
    description: "OK",
    merchant: {
      name: "PKSVR",
      photo:
        "https://loyalty-prime-s3.s3.ap-southeast-1.amazonaws.com/resources/images/f61231ec-da5d-4fa0-b34e-a28ea3891746.jpg",
    },
    startDate: "2024-10-27T17:00:00.000+00:00",
    endDate: "2024-10-29T17:00:00.000+00:00",
    item: [
      {
        data: "the-real-reward://lucky-draw?ref=bde620c8-ce8d-492b-995e-b74065055094",
        status: "PUBLISHED",
      },
    ],
  },
  {
    name: "Rolex",
    photo:
      "https://loyalty-prime-s3.s3.ap-southeast-1.amazonaws.com/resources/images/d43897ce-f97a-45d5-addb-890a1b31a25f.jpg",
    ref: "LR274173964622341875",
    description: "OK",
    merchant: {
      name: "PKSVR",
      photo:
        "https://loyalty-prime-s3.s3.ap-southeast-1.amazonaws.com/resources/images/f61231ec-da5d-4fa0-b34e-a28ea3891746.jpg",
    },
    startDate: "2024-10-27T17:00:00.000+00:00",
    endDate: "2024-10-29T17:00:00.000+00:00",
    item: [
      {
        data: "the-real-reward://lucky-draw?ref=bde620c8-ce8d-492b-995e-b74065055094",
        status: "PUBLISHED",
      },
    ],
  },
  {
    name: "Thanks",
    photo:
      "https://loyalty-prime-s3.s3.ap-southeast-1.amazonaws.com/resources/images/d43897ce-f97a-45d5-addb-890a1b31a25f.jpg",
    ref: "LR274173964622341875",
    description: "OK",
    merchant: {
      name: "PKSVR",
      photo:
        "https://loyalty-prime-s3.s3.ap-southeast-1.amazonaws.com/resources/images/f61231ec-da5d-4fa0-b34e-a28ea3891746.jpg",
    },
    startDate: "2024-10-27T17:00:00.000+00:00",
    endDate: "2024-10-29T17:00:00.000+00:00",
    item: [
      {
        data: "the-real-reward://lucky-draw?ref=bde620c8-ce8d-492b-995e-b74065055094",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=4e0d323a-8a32-4383-b22e-5b899d66e2cf",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=84962c6f-dfdb-43a5-b6a2-519e71c70943",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=c883e133-cb63-41ca-9ea7-167383a2c771",
        status: "REDEEM",
      },
      {
        data: "the-real-reward://lucky-draw?ref=e738959f-0ad0-4835-8948-65f69003af8c",
        status: "CLAIMED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=bde620c8-ce8d-492b-995e-b74065055094",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=4e0d323a-8a32-4383-b22e-5b899d66e2cf",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=84962c6f-dfdb-43a5-b6a2-519e71c70943",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=c883e133-cb63-41ca-9ea7-167383a2c771",
        status: "REDEEM",
      },
      {
        data: "the-real-reward://lucky-draw?ref=e738959f-0ad0-4835-8948-65f69003af8c",
        status: "CLAIMED",
      },
    ],
  },
  {
    name: "50 Coin",
    photo:
      "https://loyalty-prime-s3.s3.ap-southeast-1.amazonaws.com/resources/images/188f7867-8aad-47ff-b274-f48634e88c13.jpg",
    ref: "LR181573150547335865",
    description: "OK",
    merchant: {
      name: "Chay Wang",
      photo:
        "https://loyalty-prime-s3.s3.ap-southeast-1.amazonaws.com/resources/images/c17ce979-6c6c-44da-808f-b97de4ce74a1.JPG",
    },
    startDate: "2024-10-27T17:00:00.000+00:00",
    endDate: "2024-10-29T17:00:00.000+00:00",
    item: [
      {
        data: "the-real-reward://lucky-draw?ref=6b0fb853-efdd-4fe8-8cb2-de502442362f",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=88d05c03-c245-4092-90d9-b8e9a0d654a0",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=939fe76a-3574-4ed5-a617-64f0b92e4aa4",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=802f0d6d-f7cc-4973-8938-2f0a52baf89b",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=9774291b-ecc1-4274-b768-06ef35195dd5",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=bce07a52-f575-46e7-8c06-e8a41cba8434",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=3edc0c77-2455-4716-885a-0e660885bd0a",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=aa06a46f-f088-4b4d-a657-04e71df19aa1",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=01abcef8-a966-4af2-a90d-94e1885af50a",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=8731d649-63bc-44eb-ab1d-4fd6e08076f1",
        status: "CLAIMED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=6b0fb853-efdd-4fe8-8cb2-de502442362f",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=88d05c03-c245-4092-90d9-b8e9a0d654a0",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=939fe76a-3574-4ed5-a617-64f0b92e4aa4",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=802f0d6d-f7cc-4973-8938-2f0a52baf89b",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=9774291b-ecc1-4274-b768-06ef35195dd5",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=bce07a52-f575-46e7-8c06-e8a41cba8434",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=3edc0c77-2455-4716-885a-0e660885bd0a",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=aa06a46f-f088-4b4d-a657-04e71df19aa1",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=01abcef8-a966-4af2-a90d-94e1885af50a",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=8731d649-63bc-44eb-ab1d-4fd6e08076f1",
        status: "CLAIMED",
      },
    ],
  },
  {
    name: "70 Coin",
    photo:
      "https://loyalty-prime-s3.s3.ap-southeast-1.amazonaws.com/resources/images/c488873a-bc33-4cdd-9d66-40e053b36609.png",
    ref: "LR274173964622341875",
    description: "Big promotion text description",
    merchant: {
      name: "Chay Wang",
      photo:
        "https://loyalty-prime-s3.s3.ap-southeast-1.amazonaws.com/resources/images/c17ce979-6c6c-44da-808f-b97de4ce74a1.JPG",
    },
    startDate: "2024-10-23T17:00:00.000+00:00",
    endDate: "2024-10-24T17:00:00.000+00:00",
    item: [
      {
        data: "the-real-reward://lucky-draw?ref=073e6b57-93c0-4153-976a-d776dc31fdaa",
        status: "CLAIMED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=2979f686-bfc5-4e3e-9486-5bf809d46432",
        status: "REDEEM",
      },
      {
        data: "the-real-reward://lucky-draw?ref=5b98554b-0635-423b-ae0d-2d8b73e34207",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=6dd385f3-e9b7-44bb-86c1-860a82f2c395",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=71e0ecc1-9a4e-48e0-8e05-d8268296d9f4",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=e9eb8ebc-9525-4670-abb2-b4b45212d6a0",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=e5b15377-9b30-4cb9-81fd-3ad8bb911822",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=9cabcea1-1ddf-4900-9526-892adcc824a9",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=d41d90aa-d3d9-4d82-85e3-4f1608a74144",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=d61f075f-9d03-4ffc-a278-b00b606f05aa",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=7279b67b-a29c-4d1f-995a-72fabf36743c",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=c8874e8a-f190-43f3-b167-575e808a30e0",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=57be245e-2290-4177-b4fe-3d1fb682c20d",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=fa797409-0763-428c-83df-2d6b8ba86291",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=a0de0fc5-2c57-485c-a562-8f2c781c0edf",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=0f7d3ce7-7df7-4b56-b369-aeeab8cc8994",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=17bc3ecc-cf2d-456b-acda-4d7981495d45",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=94b95154-1955-4a37-a4da-2f5688759d65",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=eb976599-ae41-4835-a2f3-75763752e088",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=000c134c-a985-4fd8-bb33-2e89a63fe17e",
        status: "CLAIMED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=2e650b85-8ec5-445f-a6a9-927ef4cb141e",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=5b53e948-52bd-4805-92a4-a2909ca4f8b3",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=0034582e-4c02-4f91-8e32-3d2c4ba9e473",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=8a3f4318-36c5-4f63-b9cc-73b695628f74",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=721442d4-ca49-4033-946f-f6d4e48dc364",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=b04e7b85-6b6a-43d6-882b-92fe18f30c2d",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=318a2ce7-a7f1-4ec2-84fb-f23fe8bb3289",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=97a21a3f-4150-4938-b541-43731b29edff",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=6f13922b-d6c5-4fb2-ad49-5cacd556472b",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=2b48fc26-4e6a-471e-84e9-8a33659e2326",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=79e70c88-e757-4a9b-a2b4-90f0eedb8378",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=80e03097-ea06-43a7-a02d-f00fcf20bb7f",
        status: "CLAIMED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=501b5fec-ffd4-4790-930e-b5c1388776f7",
        status: "CLAIMED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=17015824-8852-47c7-b250-b90f72933432",
        status: "CLAIMED",
      },
    ],
  },
  {
    name: "Aojiru",
    photo:
      "https://loyalty-prime-s3.s3.ap-southeast-1.amazonaws.com/resources/images/c488873a-bc33-4cdd-9d66-40e053b36609.png",
    ref: "LR274173964622341875",
    description: "Big promotion text description",
    merchant: {
      name: "Chay Wang",
      photo:
        "https://loyalty-prime-s3.s3.ap-southeast-1.amazonaws.com/resources/images/c17ce979-6c6c-44da-808f-b97de4ce74a1.JPG",
    },
    startDate: "2024-10-23T17:00:00.000+00:00",
    endDate: "2024-10-24T17:00:00.000+00:00",
    item: [
      {
        data: "the-real-reward://lucky-draw?ref=073e6b57-93c0-4153-976a-d776dc31fdaa",
        status: "CLAIMED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=2979f686-bfc5-4e3e-9486-5bf809d46432",
        status: "REDEEM",
      },
      {
        data: "the-real-reward://lucky-draw?ref=5b98554b-0635-423b-ae0d-2d8b73e34207",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=6dd385f3-e9b7-44bb-86c1-860a82f2c395",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=71e0ecc1-9a4e-48e0-8e05-d8268296d9f4",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=e9eb8ebc-9525-4670-abb2-b4b45212d6a0",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=e5b15377-9b30-4cb9-81fd-3ad8bb911822",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=9cabcea1-1ddf-4900-9526-892adcc824a9",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=d41d90aa-d3d9-4d82-85e3-4f1608a74144",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=d61f075f-9d03-4ffc-a278-b00b606f05aa",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=7279b67b-a29c-4d1f-995a-72fabf36743c",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=c8874e8a-f190-43f3-b167-575e808a30e0",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=57be245e-2290-4177-b4fe-3d1fb682c20d",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=fa797409-0763-428c-83df-2d6b8ba86291",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=a0de0fc5-2c57-485c-a562-8f2c781c0edf",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=0f7d3ce7-7df7-4b56-b369-aeeab8cc8994",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=17bc3ecc-cf2d-456b-acda-4d7981495d45",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=94b95154-1955-4a37-a4da-2f5688759d65",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=eb976599-ae41-4835-a2f3-75763752e088",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=000c134c-a985-4fd8-bb33-2e89a63fe17e",
        status: "CLAIMED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=2e650b85-8ec5-445f-a6a9-927ef4cb141e",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=5b53e948-52bd-4805-92a4-a2909ca4f8b3",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=0034582e-4c02-4f91-8e32-3d2c4ba9e473",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=8a3f4318-36c5-4f63-b9cc-73b695628f74",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=721442d4-ca49-4033-946f-f6d4e48dc364",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=b04e7b85-6b6a-43d6-882b-92fe18f30c2d",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=318a2ce7-a7f1-4ec2-84fb-f23fe8bb3289",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=97a21a3f-4150-4938-b541-43731b29edff",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=6f13922b-d6c5-4fb2-ad49-5cacd556472b",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=2b48fc26-4e6a-471e-84e9-8a33659e2326",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=79e70c88-e757-4a9b-a2b4-90f0eedb8378",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=80e03097-ea06-43a7-a02d-f00fcf20bb7f",
        status: "CLAIMED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=501b5fec-ffd4-4790-930e-b5c1388776f7",
        status: "CLAIMED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=17015824-8852-47c7-b250-b90f72933432",
        status: "CLAIMED",
      },
    ],
  },
  {
    name: "20 USD",
    photo:
      "https://loyalty-prime-s3.s3.ap-southeast-1.amazonaws.com/resources/images/c488873a-bc33-4cdd-9d66-40e053b36609.png",
    ref: "LR274173964622341875",
    description: "Big promotion text description",
    merchant: {
      name: "Chay Wang",
      photo:
        "https://loyalty-prime-s3.s3.ap-southeast-1.amazonaws.com/resources/images/c17ce979-6c6c-44da-808f-b97de4ce74a1.JPG",
    },
    startDate: "2024-10-23T17:00:00.000+00:00",
    endDate: "2024-10-24T17:00:00.000+00:00",
    item: [
      {
        data: "the-real-reward://lucky-draw?ref=073e6b57-93c0-4153-976a-d776dc31fdaa",
        status: "CLAIMED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=2979f686-bfc5-4e3e-9486-5bf809d46432",
        status: "REDEEM",
      },
      {
        data: "the-real-reward://lucky-draw?ref=5b98554b-0635-423b-ae0d-2d8b73e34207",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=6dd385f3-e9b7-44bb-86c1-860a82f2c395",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=71e0ecc1-9a4e-48e0-8e05-d8268296d9f4",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=e9eb8ebc-9525-4670-abb2-b4b45212d6a0",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=e5b15377-9b30-4cb9-81fd-3ad8bb911822",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=9cabcea1-1ddf-4900-9526-892adcc824a9",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=d41d90aa-d3d9-4d82-85e3-4f1608a74144",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=d61f075f-9d03-4ffc-a278-b00b606f05aa",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=7279b67b-a29c-4d1f-995a-72fabf36743c",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=c8874e8a-f190-43f3-b167-575e808a30e0",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=57be245e-2290-4177-b4fe-3d1fb682c20d",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=fa797409-0763-428c-83df-2d6b8ba86291",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=a0de0fc5-2c57-485c-a562-8f2c781c0edf",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=0f7d3ce7-7df7-4b56-b369-aeeab8cc8994",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=17bc3ecc-cf2d-456b-acda-4d7981495d45",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=94b95154-1955-4a37-a4da-2f5688759d65",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=eb976599-ae41-4835-a2f3-75763752e088",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=000c134c-a985-4fd8-bb33-2e89a63fe17e",
        status: "CLAIMED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=2e650b85-8ec5-445f-a6a9-927ef4cb141e",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=5b53e948-52bd-4805-92a4-a2909ca4f8b3",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=0034582e-4c02-4f91-8e32-3d2c4ba9e473",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=8a3f4318-36c5-4f63-b9cc-73b695628f74",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=721442d4-ca49-4033-946f-f6d4e48dc364",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=b04e7b85-6b6a-43d6-882b-92fe18f30c2d",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=318a2ce7-a7f1-4ec2-84fb-f23fe8bb3289",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=97a21a3f-4150-4938-b541-43731b29edff",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=6f13922b-d6c5-4fb2-ad49-5cacd556472b",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=2b48fc26-4e6a-471e-84e9-8a33659e2326",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=79e70c88-e757-4a9b-a2b4-90f0eedb8378",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=80e03097-ea06-43a7-a02d-f00fcf20bb7f",
        status: "CLAIMED",
      },
    ],
  },
  {
    name: "10 USD",
    photo:
      "https://loyalty-prime-s3.s3.ap-southeast-1.amazonaws.com/resources/images/c488873a-bc33-4cdd-9d66-40e053b36609.png",
    ref: "LR274173964622341875",
    description: "Big promotion text description",
    merchant: {
      name: "Chay Wang",
      photo:
        "https://loyalty-prime-s3.s3.ap-southeast-1.amazonaws.com/resources/images/c17ce979-6c6c-44da-808f-b97de4ce74a1.JPG",
    },
    startDate: "2024-10-23T17:00:00.000+00:00",
    endDate: "2024-10-24T17:00:00.000+00:00",
    item: [
      {
        data: "the-real-reward://lucky-draw?ref=073e6b57-93c0-4153-976a-d776dc31fdaa",
        status: "CLAIMED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=2979f686-bfc5-4e3e-9486-5bf809d46432",
        status: "REDEEM",
      },
      {
        data: "the-real-reward://lucky-draw?ref=5b98554b-0635-423b-ae0d-2d8b73e34207",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=6dd385f3-e9b7-44bb-86c1-860a82f2c395",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=71e0ecc1-9a4e-48e0-8e05-d8268296d9f4",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=e9eb8ebc-9525-4670-abb2-b4b45212d6a0",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=e5b15377-9b30-4cb9-81fd-3ad8bb911822",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=9cabcea1-1ddf-4900-9526-892adcc824a9",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=d41d90aa-d3d9-4d82-85e3-4f1608a74144",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=d61f075f-9d03-4ffc-a278-b00b606f05aa",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=7279b67b-a29c-4d1f-995a-72fabf36743c",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=c8874e8a-f190-43f3-b167-575e808a30e0",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=57be245e-2290-4177-b4fe-3d1fb682c20d",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=fa797409-0763-428c-83df-2d6b8ba86291",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=a0de0fc5-2c57-485c-a562-8f2c781c0edf",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=0f7d3ce7-7df7-4b56-b369-aeeab8cc8994",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=17bc3ecc-cf2d-456b-acda-4d7981495d45",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=94b95154-1955-4a37-a4da-2f5688759d65",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=eb976599-ae41-4835-a2f3-75763752e088",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=000c134c-a985-4fd8-bb33-2e89a63fe17e",
        status: "CLAIMED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=2e650b85-8ec5-445f-a6a9-927ef4cb141e",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=5b53e948-52bd-4805-92a4-a2909ca4f8b3",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=0034582e-4c02-4f91-8e32-3d2c4ba9e473",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=8a3f4318-36c5-4f63-b9cc-73b695628f74",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=721442d4-ca49-4033-946f-f6d4e48dc364",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=b04e7b85-6b6a-43d6-882b-92fe18f30c2d",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=318a2ce7-a7f1-4ec2-84fb-f23fe8bb3289",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=97a21a3f-4150-4938-b541-43731b29edff",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=6f13922b-d6c5-4fb2-ad49-5cacd556472b",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=2b48fc26-4e6a-471e-84e9-8a33659e2326",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=79e70c88-e757-4a9b-a2b4-90f0eedb8378",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=80e03097-ea06-43a7-a02d-f00fcf20bb7f",
        status: "CLAIMED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=318a2ce7-a7f1-4ec2-84fb-f23fe8bb3289",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=97a21a3f-4150-4938-b541-43731b29edff",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=6f13922b-d6c5-4fb2-ad49-5cacd556472b",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=2b48fc26-4e6a-471e-84e9-8a33659e2326",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=79e70c88-e757-4a9b-a2b4-90f0eedb8378",
        status: "PUBLISHED",
      },
      {
        data: "the-real-reward://lucky-draw?ref=80e03097-ea06-43a7-a02d-f00fcf20bb7f",
        status: "CLAIMED",
      },
    ],
  },
];

const config = {
  type: Phaser.AUTO,
  width: Math.min(480, window.innerWidth),
  height: window.innerHeight,
  parent: "game-container",
  scene: { preload, create, update },
};

let rewardList = [
  { val: -1, label: "Rolex", weight: 0 },
  { val: -2, label: "Thanks", weight: 0 },
  { val: -3, label: "50 Coin", weight: 0 },
  { val: -4, label: "70 Coin", weight: 0 },
  { val: 3, label: "Aojiru", weight: 0 },
  { val: 1, label: "20 USD", weight: 0 },
  { val: 2, label: "10 USD", weight: 0 },
  { val: 0, label: "iPhone 15", weight: 0 },
];

async function getToken() {
  try {
    const body = {
      key: "UboUHbQFY9BHtzAjlgsD3SQaocx9lMXvfSoxxetRAvpRQ1P4CwWcKdOwTwWkOD7j",
      secret:
        "8f1f4ei/si3hCVjGUOvIpF5g42+EpnE6gNUrEik4yHwvplllhJaEmR+MepqFz1cf",
    };
    const response = await axios.post(`${baseUrl}/partner/v1/login`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if(response.data.response.status == 200){
        token = response.data?.results?.token
    }

    // Log or use the response data in your game
    console.log("API Response:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Add Axios request as a method on the Phaser scene
async function getData() {
  try {
    await getToken.call();
    const response = await axios.post(
      `${baseUrl}/partner/v1/lucky-reward`,
      "",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Log or use the response data in your game
    console.log("API Response:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function preload() {
  this.load.audio("introSound", "assets/audios/intro.mp3");
  this.load.audio("collectSound", "assets/audios/collect.mp3");
  this.load.audio("spinSound", "assets/audios/spinSound.mp3");

  this.load.image("background", "assets/images/background.png");
  this.load.image("wheel", "assets/images/wheel.png");
  this.load.image("bgWheelTop", "assets/images/bgWheelTop.png");
  this.load.image("bgWheel", "assets/images/bgWheel.png");
  this.load.image("pin", "assets/images/pin.png");
  this.load.image("spinButton", "assets/images/spinButton.png");
  this.load.image("spinButtonDown", "assets/images/spinButtonDown.png");
  this.load.image("bgReward", "assets/images/blur.png");
  this.load.image("box", "assets/images/box.png");
  this.load.image("btnClaim", "assets/images/btnClaim.png");

  this.load.image("icSound", "assets/images/sound.png");
  this.load.image("icSoundOff", "assets/images/soundOff.png");
  this.load.image("bgCoin", "assets/images/bgCoin.png");
  // this.load.image('bgCoin2', 'assets/images/bgCoin2.png');

  this.load.image("btnAdd", "assets/images/add.png");
  this.load.image("btnMinus", "assets/images/minus.png");

  this.load.spritesheet("firework", "assets/images/firework.png", {
    frameWidth: 480, // Width of each frame
    frameHeight: 480, // Height of each frame
  });
}

function create() {
  let isMuted = true;
  getData.call();

  rewardList = rewardList.map((reward) => {
    let correspondingReward = dataRewards.find((r) => r.name === reward.label);

    const publishedCount = correspondingReward
      ? correspondingReward.item.filter((item) => item.status === "PUBLISHED")
          .length
      : 0;

    return {
      ...reward,
      weight: publishedCount,
    };
  });

  getSpinNumber.call();

  const introSound = this.sound.add("introSound");
  const collectSound = this.sound.add("collectSound");
  const spinSound = this.sound.add("spinSound");

  this.anims.create({
    key: "fireworkAnim",
    frames: this.anims.generateFrameNumbers("firework", { start: 0, end: 9 }),
    frameRate: 10,
    repeat: -1,
  });

  // Set the background image
  this.add
    .image(this.cameras.main.centerX, this.cameras.main.centerY, "background")
    .setOrigin(0.5, 0.5)
    .setDisplaySize(this.cameras.main.width, this.cameras.main.height);

  const icSoundOff = this.add.sprite(
    this.cameras.main.width / 2,
    this.cameras.main.height / 2,
    "icSoundOff"
  );
  icSoundOff.setPosition(this.cameras.main.width - 12, 12);
  icSoundOff.setOrigin(1, -0.1);
  icSoundOff.setScale(0.5);

  const icSound = this.add.sprite(
    this.cameras.main.width / 2,
    this.cameras.main.height / 2,
    "icSound"
  );
  icSound.setPosition(this.cameras.main.width - 12, 12);
  icSound.setOrigin(1, -0.1);
  icSound.setScale(0.5);

  const btnAdd = this.add.sprite(
    icSound.x - icSound.displayWidth - 10,
    icSound.y,
    "btnAdd"
  );
  btnAdd.setScale(0.7);
  btnAdd.setOrigin(1, 0);
  btnAdd.setInteractive();
  btnAdd.on("pointerdown", () => {
    if (!spinNumber) {
      spinNumber = 0;
    }
    spinNumber = parseInt(spinNumber) + 1;
    localStorage.setItem("spinNumber", spinNumber);
    getSpinNumber.call();
    spinNumberText.setText(`${spinNumber}`);
  });

  spinNumberText = this.add.text(
    icSound.x - icSound.displayWidth - 70,
    42,
    `${spinNumber}`,
    { font: "24px Arial", fill: "#000000" }
  );
  spinNumberText.setOrigin(0.5, 1);

  const btnMinus = this.add.sprite(
    icSound.x - icSound.displayWidth - 100,
    icSound.y,
    "btnMinus"
  );
  btnMinus.setScale(0.7);
  btnMinus.setOrigin(1, 0);
  btnMinus.setInteractive();
  btnMinus.on("pointerdown", () => {
    if (spinNumber > 0) {
      spinNumber = spinNumber - 1;
    }
    localStorage.setItem("spinNumber", spinNumber);
    getSpinNumber.call();
    spinNumberText.setText(`${spinNumber}`);
  });

  //   const bgCoin = this.add.sprite(
  //     icSound.x - icSound.displayWidth - 10,
  //     icSound.y,
  //     "bgCoin"
  //   );
  //   bgCoin.setOrigin(1, 0);
  //   bgCoin.setScale(0.3);
  //   bgCoin.setInteractive();

  //   bgCoin.on("pointerdown", () => {
  //     localStorage.setItem("spinNumber", 2);
  //     getSpinNumber.call();
  //     spinNumberText.setText(`${spinNumber}`);
  //   });

  // const bgCoin2 = this.add.sprite(bgCoin.x - bgCoin.displayWidth - 10, bgCoin.y, 'bgCoin2');
  // bgCoin2.setOrigin(1, 0); // Keep the same origin
  // bgCoin2.setScale(0.5);

  const bgWheelTop = this.add.sprite(
    this.cameras.main.width / 2,
    160,
    "bgWheelTop"
  );
  bgWheelTop.setScale(0.65);
  bgWheelTop.setOrigin(0.5, 0.5);

  const wheel = this.add.sprite(this.cameras.main.width / 2, 320, "wheel");
  wheel.setScale(0.33);
  wheel.setOrigin(0.5, 0.5);

  // Position the wheel at the top of the screen
  const bgWheel = this.add.sprite(this.cameras.main.width / 2, 320, "bgWheel");
  bgWheel.setScale(0.67);
  bgWheel.setOrigin(0.5, 0.5);

  // Position the spinButton above the user list block
  spinButton = this.add.sprite(
    this.cameras.main.width / 2,
    this.cameras.main.height - 100,
    "spinButton"
  ); // Adjust Y position as needed
  spinButton.setScale(0.4);
  spinButton.setOrigin(0.5, 1); // Set origin to bottom center so it aligns to the top of the block
  spinButton.setInteractive();

  // Set button click to spin the wheel
  spinButton.on("pointerdown", () => {
    // validateBeforeSpin.call();
    spinButton.setTexture("spinButtonDown");
  });

  spinButton.on(
    "pointerup",
    spinWheel.bind(this, wheel, spinSound, collectSound, showToast)
  );

  spinButton.on("pointerout", () => {
    spinButton.setTexture("spinButton"); // Reset if pointer leaves button area
  });

  icSound.setInteractive();
  icSound.on("pointerdown", () => {
    isMuted = !isMuted;
    introSound.setMute(isMuted); // Mute or unmute the sound
    collectSound.setMute(isMuted);
    spinSound.setMute(isMuted);

    // Optionally change the sound icon based on the mute state
    if (isMuted) {
      icSound.setTexture("icSound"); // Assuming 'icSoundOff' is an icon for sound off
    } else {
      icSound.setTexture("icSoundOff"); // Switch back to the original icon
      introSound.play();
    }
  });
}

function update() {
  // Update the scene if necessary
}

const game = new Phaser.Game(config);

function spinWheel(wheel, spinSound, collectSound, showToast) {
  // validateBeforeSpin.call();

  if (spinNumber < 1) {
    showToast("Please Top up to spin!");
    return;
  }

  spinButton.setTexture("spinButton"); // Reset to default state
  spinButton.disableInteractive();
  const selectedReward = getWeightedReward(rewardList); // Select weighted reward

  const segmentIndex = rewardList.indexOf(selectedReward);
  const degreesPerSegment = 360 / rewardList.length;
  const halfSegmentOffset = degreesPerSegment / 2; // Add half-segment for better alignment
  const finalDegrees = segmentIndex * degreesPerSegment + halfSegmentOffset;

  const rounds = Phaser.Math.Between(2, 4);
  const totalAngle = 360 * rounds + finalDegrees; // Ensure it lands on the correct segment

  this.tweens.add({
    targets: wheel,
    angle: totalAngle,
    ease: Phaser.Math.Easing.Cubic.Out, // Use correct Phaser easing function
    duration: Phaser.Math.Between(4000, 5000),
    onStart: () => spinSound.play(),
    onComplete: () => {
      spinSound.stop();
      collectSound.play();
      console.log("Winning Reward:", selectedReward.label);
      showToast(selectedReward.label);
      showPopup.call(this, selectedReward.label);
    },
  });
}

function getWeightedReward(rewardList) {
  const totalWeight = rewardList.reduce(
    (sum, reward) => sum + reward.weight,
    0
  );
  let random = Math.random() * totalWeight; // Random float between 0 and totalWeight

  for (const reward of rewardList) {
    if (random < reward.weight) {
      return reward;
    }
    random -= reward.weight;
  }
}

function determineWinningSegment(angle) {
  const segmentCount = rewardList.length; // Matches the rewardList length
  const degreesPerSegment = 360 / segmentCount;

  // Normalize the angle within 0-360 degrees
  const normalizedAngle = (angle + 360) % 360;

  // Calculate the segment index (adjust offset if segment 0 isn't at the top)
  const segmentIndex = Math.floor(
    ((normalizedAngle + degreesPerSegment / 2) % 360) / degreesPerSegment
  );

  return segmentIndex;
}

function showPopup(reward) {
  generateQR.call(this, "https://example.com");

  // Create the firework sprite and play the animation at the center of the screen
  const firework = this.add.sprite(
    this.cameras.main.centerX,
    this.cameras.main.centerY,
    "firework"
  );
  firework.play("fireworkAnim");

  // Add the popup background image
  const popupBackground = this.add.image(
    this.cameras.main.centerX,
    this.cameras.main.centerY,
    "bgReward"
  );
  popupBackground.setOrigin(0.5, 0.5);
  popupBackground.setDisplaySize(
    this.cameras.main.width,
    this.cameras.main.height
  );

  const box = this.add.sprite(
    this.cameras.main.width / 2,
    this.cameras.main.height - 450,
    "box"
  );
  box.setOrigin(0.5, 0.5);
  box.setScale(0.6);

  const style = { font: "20px Arial", fill: "#ffffff", align: "center" };
  const text = this.add.text(
    this.cameras.main.centerX,
    box.y - box.displayHeight + 130,
    `Congratulations!\nYou won ${reward}`,
    style
  );
  text.setOrigin(0.5, 0.5);

  const btnClaim = this.add.image(
    this.cameras.main.centerX,
    this.cameras.main.height - 100,
    "btnClaim"
  );
  btnClaim.setOrigin(0.5, 0.5);
  btnClaim.setScale(0.5);
  btnClaim.setInteractive();

  // Cleanup function to remove popup elements
  btnClaim.on("pointerdown", () => {
    popupBackground.destroy(); // Remove the popup
    text.destroy();
    box.destroy();
    btnClaim.destroy();
    firework.destroy(); // Optional: remove firework when claiming
    // Add more logic here if needed, like moving to another scene

    if (qrSprite) {
      qrSprite.destroy(); // Destroy the QR code sprite
      qrSprite = null; // Reset the variable

      // Remove the texture to free up resources
      if (this.textures.exists("qrCanvas")) {
        this.textures.remove("qrCanvas");
      }
    }

    spinButton.setInteractive();
    minusSpinNumber.call();
  });
}

function showStartDialog(introSound) {
  // Create a semi-transparent black overlay
  const overlay = this.add.graphics();
  overlay.fillStyle(0x000000, 0.5);
  overlay.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height);

  // Create a white dialog box
  const dialogBox = this.add.graphics();
  dialogBox.fillStyle(0xffffff, 1);
  dialogBox.fillRoundedRect(50, 200, this.cameras.main.width - 100, 200, 10);

  // Add dialog text
  const dialogText = this.add.text(
    this.cameras.main.centerX,
    250,
    "LUCKY SPIN",
    { font: "24px Arial", fill: "#000000" }
  );
  dialogText.setOrigin(0.5, 0.5);

  const dialogDesc = this.add.text(
    this.cameras.main.centerX,
    280,
    "Click on button to start.",
    { font: "16px Arial", fill: "#999" }
  );
  dialogDesc.setOrigin(0.5, 0.5);

  // Create a button background
  const startButtonBackground = this.add.graphics();
  const buttonWidth = 100;
  const buttonHeight = 40;
  startButtonBackground.fillStyle(0x007bff, 1);
  startButtonBackground.fillRoundedRect(
    this.cameras.main.centerX - buttonWidth / 2,
    340,
    buttonWidth,
    buttonHeight,
    5
  );

  // Add the start button text
  const startButton = this.add.text(this.cameras.main.centerX, 360, "Start", {
    font: "20px Arial",
    fill: "#FFFFFF",
  });
  startButton.setOrigin(0.5, 0.5);
  startButton.setInteractive();

  // Function to remove all dialog elements
  const closeDialog = () => {
    overlay.destroy();
    dialogBox.destroy();
    dialogText.destroy();
    dialogDesc.destroy();
    startButtonBackground.destroy();
    startButton.destroy();
    introSound.play({ loop: true });
  };

  // Set interactive for overlay to close the dialog when clicked
  overlay.setInteractive().on("pointerdown", closeDialog);

  // Set interactive for button and close dialog on click
  startButton.on("pointerdown", closeDialog);
}

function generateQR(link) {
  const qr = new QRious({
    value: link, // The data for the QR code
    size: 120, // Size of the QR code
  });

  // Convert QR code to Phaser texture
  const qrImage = new Image();
  qrImage.src = qr.toDataURL();

  qrImage.onload = () => {
    // Create a new canvas to copy the QR code image
    const canvas = this.textures.createCanvas(
      "qrCanvas",
      qrImage.width,
      qrImage.height
    );
    const context = canvas.context;

    // Draw the QR code on the canvas
    context.drawImage(qrImage, 0, 0);

    // Refresh the canvas to update Phaser’s texture system
    canvas.refresh();

    // Create a sprite using the canvas texture
    qrSprite = this.add.image(
      this.scale.width / 2 + 60,
      this.scale.height / 2 + 72,
      "qrCanvas"
    );
    qrSprite.setOrigin(1, 0.5); // Center the sprite
  };

  // Handle any errors
  qrImage.onerror = () => {
    console.error("Failed to load QR code image.");
  };
}

function getSpinNumber() {
  const storedSpinValue = localStorage.getItem("spinNumber");
  if (storedSpinValue) {
    spinNumber = storedSpinValue;
  }

  if (spinButton) {
    if (spinNumber == 0) {
      spinButton.disableInteractive();
    } else {
      spinButton.setInteractive();
    }
  }
}

function minusSpinNumber() {
  if (spinNumber && spinNumber > 0) {
    spinNumber = spinNumber - 1;
  } else {
    spinNumber = 0;
  }
  if (spinButton) {
    if (spinNumber == 0) {
      spinButton.disableInteractive();
    } else {
      spinButton.setInteractive();
    }
  }

  localStorage.setItem("spinNumber", spinNumber);
  spinNumberText.setText(`${spinNumber}`);
}

function validateBeforeSpin() {
  if (spinNumber < 1) {
    showToast("Please Top up to spin!");
    return;
  }
}

// Function to show toast message
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000); // Hide after 3 seconds
}

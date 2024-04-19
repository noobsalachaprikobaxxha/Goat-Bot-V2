const axios = require('axios');

module.exports = {
  config: {
    name: "ronaldoedit",
    aliases: ["redit"],
    version: "2.0",
    author: "Dee Pam & Kshitiz",
    countDown: 10,
    role: 0,
    shortDescription: "",
    longDescription: "bot will send you ronaldo edits 🐐",
    category: "EDIT",
    guide: "{p}redit",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "sending goat edit video 🐐..",
    });

    const driveLinks = [
      "https://drive.google.com/file/d/12of_p-SWD0TH-M7hXXi3Ye8bIa7fEJ0L/view?usp=drivesdk",
      "https://drive.google.com/file/d/13AAOpLAR9QyeFFc74gGpNzuYWiC87Z4r/view?usp=drivesdk",

"https://drive.google.com/file/d/13A9TDdqX6gqrF7Oq5_f0fT6MmlGSgdDH/view?usp=drivesdk",

"https://drive.google.com/file/d/13A9TDdqX6gqrF7Oq5_f0fT6MmlGSgdDH/view?usp=drivesdk",

"https://drive.google.com/file/d/13jXd8h6nXNXMrr0xB3e1qun4onnyd92n/view?usp=drivesdk",

"https://drive.google.com/file/d/13nGQBo1XAFACSMQfTJuzZdJzuJScXPgl/view?usp=drivesdk",

"https://drive.google.com/file/d/13vsQmEWsfrfbYaUzwgVPwtRtHLGAtfY4/view?usp=drivesdk",

"https://drive.google.com/file/d/140VEMfQXDv-6V5MNuOGY6aoicvku-Y1I/view?usp=drivesdk",

"https://drive.google.com/file/d/140h5pA4IgQrjisWlWtZrPIm53sHkWYEB/view?usp=drivesdk",

"https://drive.google.com/file/d/141q_3pbXxmfyyPZnCNxdwyBhh27XRGyh/view?usp=drivesdk",

"https://drive.google.com/file/d/146TlTTLmKqrn6hpnSZP4i4dZI1Ua5qeC/view?usp=drivesdk",

"https://drive.google.com/file/d/149UhUV-AvFzVkwKIjOQsQlPiy7jfMsZ1/view?usp=drivesdk",

"https://drive.google.com/file/d/14HuP7vqZkjMwLzJQ9NHUVNjoxJ1j4dr7/view?usp=drivesdk",

"https://drive.google.com/file/d/14hkB9krPG-8Jl7B1PL2c4BblcAGSX0C5/view?usp=drivesdk",

"https://drive.google.com/file/d/14yEmy8-TnkvVwy4DWdatSt6W8bhCtgib/view?usp=drivesdk",

"https://drive.google.com/file/d/15WAN3PTtVxUt7HAlu6W-PvQCOagcEM75/view?usp=drivesdk",

"https://drive.google.com/file/d/15a9_8JLcjtW4mRGbbd79lofy_HoD9wtk/view?usp=drivesdk",

"https://drive.google.com/file/d/15ezzhK4YOD3Js1Mn9YsXhmLrcVrk3d07/view?usp=drivesdk",

"https://drive.google.com/file/d/15VXnHyVX4YXMKJ7KYseAR9o3Hy2mAAVl/view?usp=drivesdk",

"https://drive.google.com/file/d/15lz-2mrMMmViSdavBT-YoCKGNE7Fg7JU/view?usp=drivesdk",

"https://drive.google.com/file/d/15jEjhdcxeCIzBadNWLXUON950U0KyMvO/view?usp=drivesdk",

"https://drive.google.com/file/d/15k_FOg91MO6xZnUtXby1kolaGUb5Ie0q/view?usp=drivesdk",

"https://drive.google.com/file/d/15wJhKng7geD1GQxdHLC8-zetMKhM_B2b/view?usp=drivesdk",

"https://drive.google.com/file/d/15zlhXgEqJn4xOBcMc3U6V7kLDnAwwoZT/view?usp=drivesdk",

"https://drive.google.com/file/d/16-PdeDRx84Gf0mhoIo__0uvis0eVSA-u/view?usp=drivesdk",

"https://drive.google.com/file/d/16-UYp6s3his0MRt3xxisazhMxoLI5cWR/view?usp=drivesdk",

"https://drive.google.com/file/d/162Sd1Q-gqmocVRs-53L5Jo_B_tVzB7UP/view?usp=drivesdk",

"https://drive.google.com/file/d/165VTzRTPf4EItcAJ7jqAKyRRYEdjRt44/view?usp=drivesdk",

"https://drive.google.com/file/d/168H1L-5YzOJI9IgmVwOta40n-Eut1mFB/view?usp=drivesdk",

"https://drive.google.com/file/d/169047LykwwBQE1IfHxumdlJra3Ab2qaK/view?usp=drivesdk",

"https://drive.google.com/file/d/16CAcDE6z18JxvrWvTSwN_2tidxNDU4eA/view?usp=drivesdk",

"https://drive.google.com/file/d/16EKxfuo26CbAZQjBkJ7f3zyyk84w0Zhw/view?usp=drivesdk",

"https://drive.google.com/file/d/16HjBSs4yKpwy4Fpaz9ThgISyDDwzQxji/view?usp=drivesdk",

"https://drive.google.com/file/d/16JIciGbhnIF1uMNGbYDBAL0cHHPtcKv_/view?usp=drivesdk",

"https://drive.google.com/file/d/16Og5s70bbt6gIlwpQySD0IJMxpTqCIL2/view?usp=drivesdk",

"https://drive.google.com/file/d/16SKcGGZzIYz7pQSAPY4U2-IG4nlzI5mR/view?usp=drivesdk",

"https://drive.google.com/file/d/16VrnD6xV-8_NzjJFsbmyV_Cn8yf12VxU/view?usp=drivesdk",

"https://drive.google.com/file/d/16VxyMFXeR1bnB61vNFK0_921jU-tsfTy/view?usp=drivesdk",

"https://drive.google.com/file/d/16_hOEzDNPOGIlvksJxv3eDwpYn6DdzAU/view?usp=drivesdk",

"https://drive.google.com/file/d/16a7MeaogVH9GMlW5I71DXom2ZkRI8HT4/view?usp=drivesdk",

"https://drive.google.com/file/d/16aKxjST2MiOO_wJncpTwHtXRYuCj_4ch/view?usp=drivesdk",

"https://drive.google.com/file/d/1O90cv54QwOeeUK7-FaGNbpaiMgMErue5/view?usp=drivesdk",

"https://drive.google.com/file/d/1O9iZEVuzXbPU79N5hnUNt1a8otpL9vFF/view?usp=drivesdk",

"https://drive.google.com/file/d/1OG_H-uBUqeJprS-njoHv9IH49b0-c55h/view?usp=drivesdk",

"https://drive.google.com/file/d/1OKi21XC1otU1o4glRynrU7EF-SG9ojWA/view?usp=drivesdk",

"https://drive.google.com/file/d/1ORdsZkGj2vXoPJ8ae2nLVLYy1wgbtdW7/view?usp=drivesdk",


 
  ];

    const availableVideos = driveLinks.filter(video => !this.sentVideos.includes(video));

    if (availableVideos.length === 0) {
      this.sentVideos = [];
    }

    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    const randomDriveLink = availableVideos[randomIndex];


    const fileId = randomDriveLink.match(/\/d\/(.+?)\//)[1];


    const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

    this.sentVideos.push(randomDriveLink);

    if (senderID !== null) {
      try {
        const response = await axios({
          method: 'GET',
          url: downloadLink,
          responseType: 'stream',
        });

        message.reply({
          body: ' Goat Arrived 🐐',
          attachment: response.data,
        });

        setTimeout(() => {
          api.unsendMessage(loadingMessage.messageID);
        }, 10000);
      } catch (error) {
        console.error('Error downloading video:', error);
        message.reply({
          body: 'Error downloading the video. Please try again later.',
        });
      }
    }
  },
};

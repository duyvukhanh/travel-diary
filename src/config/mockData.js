users = [
    {
        userId : "user01", //mongo
        name : "Khanh Duy",
        email : "duyvukhanh@gmail.com",
        password : "hashedMD5",
        userImg : "duyava.jpg",
        backgroundImg : "../images/abcxyz123.jpg",
        voted : 3,
        userFacebook : "https://www.facebook.com/vukhanh.duy.921",
        userInstagram : "https://www.instagram.com/khanhduy2906/",
        bio : "Hiện đang thất nghiệp",
        gallery : ["album01","album02"],
        voteFor = ["album03","album04"]
    }
]

galleries = [
    {
        albumId : "album01",//mongo
        place : "VN-02",
        albumName : "Sa Pa",
        owner : "user01",
        dateCreated : "24 February 2020",
        voted : 3,
        images : [
            "album01image1",
            "album01image2",
            "album01image3",
            "album01image4",
            "album01image5",
        ]
    }
]


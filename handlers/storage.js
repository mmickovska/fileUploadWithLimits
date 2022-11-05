// const upload = async (req, res) => {
//     // console.log(req.files);
//     await req.files.slika.mv(`${__dirname}/../uploads/${req.files.slika.name}`);
//     res.send('OK');
// };


// limit na upload da mozhe da se upload samo sliki i limitot da bide 1mg
// image.jpg, image.png


const upload = async (req, res) => {
    if (req.files.slika.mimetype !== 'image/jpeg' && 'image/jpg' && 'image/jpg')
        return res.status(422).send("Invalid format! File not an image!");
    else await req.files.slika.mv(`${__dirname}/../uploads/${req.files.slika.name}`);
    res.send('OK');
}

// const download = async (req, res) => {
//     res.send('OK');
// };

module.exports = {
    upload,
    // download
}


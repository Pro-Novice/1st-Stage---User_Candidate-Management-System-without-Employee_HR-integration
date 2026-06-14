

// class UserController {
// addUser= async (req, res, next) => {



//     [
//         check('firstname', 'First name is required')
//             .not()
//             .isEmpty(),
//         check('lastname', 'Last name is required')
//             .not()
//             .isEmpty(),
//         check('phone', 'Phone number is required')
//             .not()
//             .isEmpty(),
//         check('email', 'Please include a valid email')
//             .isEmail()
//             .normalizeEmail(),
//         check('password', 'Please enter a password with 6 or more characters')
//             .isLength({ min: 6 })
//     ]


//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     // destructuring so we don't have to prefix with with 'req.body.'
//     const { firstname, lastname, phone, address: { street1, street2, city, state, zip }, gender, dob, email, password } = req.body;
//     try {
//         let user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({ errors: [{ msg: 'user already exists' }] });
//         }

//         user = new User({
//             firstname,
//             lastname,
//             phone,
//             address: {
//                 street1,
//                 street2,
//                 city,
//                 state,
//                 zip
//             },
//             gender,
//             dob,
//             email,
//             password
//         });
//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(password, salt);
//         const savedUser = await user.save();
//         const payload = {
//             user: {
//                 id: user.id
//             }
//         };
//         // sign the token, pass in payload, pass in secret, expiration (optional)
//         // inside the callback, if we don't get an error, we send back the token
//         jwt.sign(
//             payload,
//             process.env.jwtSecret,
//             //config.get('jwtSecret'),
//             { expiresIn: 720000 },
//             (err, token) => {
//                 if (err) throw err;
//                 res.json({
//                     token,
//                     user: {
//                         id: savedUser._id,
//                         email: savedUser.email
//                     }
//                 });
//             }
//         );
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send('Server error');
//     };
// }

// getUser(params) {

// }

// updateUser(params) {

// }
// }


// module.exports = UserController
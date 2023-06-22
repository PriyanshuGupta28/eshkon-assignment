import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { logoutUser, updateCard } from "../Action/actions";
import "./SecondPage.css";
import Navbar from "../navbar/Navbar";

const SecondPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const card = useSelector((state) => state.card);

  const [newCard, setNewCard] = useState({
    image: "",
    title: "",
    description: "",
    callToAction: "",
  });

  const handleLogout = () => {
    dispatch(logoutUser()); // Dispatches the action to log out the user
    navigate("/"); // Navigates to the home page
  };

  const handleCardUpdate = (e) => {
    e.preventDefault();
    dispatch(updateCard(newCard)); // Dispatches the action to update the card with newCard data
    resetForm(); // Resets the form input fields
  };

  const resetForm = () => {
    setNewCard({
      image: "",
      title: "",
      description: "",
      callToAction: "",
    });
  };

  return (
    <>
      <Navbar onLogout={handleLogout} />{" "}
      {/* Renders the navbar component with the handleLogout function */}
      <div className="container">
        <div className="second-page-container">
          <div className="left-column">
            <h1 className="welcome-text">Welcome, {user.name}!</h1>
            <motion.img
              className="user-avatar"
              src={user.avatar}
              alt="User Avatar"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <p className="user-name">{user.name}</p>
            <p className="user-info">City: {user.city}</p>
            <p className="user-info">Country: {user.country}</p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="right-column"
          >
            <motion.div
              className="card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Thumbnail: -{" "}
              {/* Renders the card image, title, description, and call to action */}
              <motion.img
                src={card.image}
                alt="Card Image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="card-image"
              />
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Title: - {card.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="card-description"
              >
                Description: - {card.description}
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="card-button"
              >
                Call: - {card.callToAction}
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="right-column"
            >
              Update Your Card details Here
            </motion.div>
            <form onSubmit={handleCardUpdate} className="card-form">
              {/* Form inputs for updating the card details */}
              <input
                className="input-field"
                type="text"
                placeholder="Image URL"
                value={newCard.image}
                onChange={(e) =>
                  setNewCard({ ...newCard, image: e.target.value })
                }
              />
              <input
                className="input-field"
                type="text"
                placeholder="Title"
                value={newCard.title}
                onChange={(e) =>
                  setNewCard({ ...newCard, title: e.target.value })
                }
              />
              <input
                className="input-field"
                type="text"
                placeholder="Description"
                value={newCard.description}
                onChange={(e) =>
                  setNewCard({ ...newCard, description: e.target.value })
                }
              />
              <input
                className="input-field"
                type="number"
                placeholder="Call to Action"
                value={newCard.callToAction}
                onChange={(e) =>
                  setNewCard({ ...newCard, callToAction: e.target.value })
                }
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="update-button"
              >
                Update Card
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SecondPage;

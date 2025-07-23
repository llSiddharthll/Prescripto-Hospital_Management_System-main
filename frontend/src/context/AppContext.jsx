import { createContext, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import PropTypes from "prop-types"; // ✅ For prop validation



export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const currencySymbol = "₹";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userData, setUserData] = useState(false);

  // ✅ Memoize API functions to avoid redefinition on each render
  const getDoctosData = useCallback(async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/list`);
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }, [backendUrl]);

  const loadUserProfileData = useCallback(async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
        headers: { token },
      });

      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }, [backendUrl, token]);

  // Load doctors list
  useEffect(() => {
    getDoctosData();
  }, [getDoctosData]);

  // Load user profile if token exists
  useEffect(() => {
    if (token) {
      loadUserProfileData();
    }
  }, [token, loadUserProfileData]);

  const value = {
    doctors,
    getDoctosData,
    currencySymbol,
    backendUrl,
    token,
    setToken,
    userData,
    setUserData,
    loadUserProfileData,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// ✅ Add prop-types validation
AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;

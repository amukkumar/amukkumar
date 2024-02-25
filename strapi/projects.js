import axios from 'axios';

export const fetchProjects = async () => {
    try {
        const response = await axios.get('http://localhost:1337/api/projects?populate=*');
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return null;
    }
};

export const fetchProjectById = async (projectId) => {
    try {
        const response = await axios.get(`http://localhost:1337/api/projects/${projectId}?populate=*`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching project with ID ${projectId}:`, error);
        return null;
    }
};


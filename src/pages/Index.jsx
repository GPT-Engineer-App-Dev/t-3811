import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  VStack,
  Heading,
  Input,
  Button,
  List,
  ListItem,
  ListIcon,
  IconButton
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} width="100%">
        <Heading>To-Do App</Heading>
        <VStack as="form" onSubmit={(e) => e.preventDefault()} width="100%" spacing={4}>
          <Input
            placeholder="Add a new task"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button onClick={handleAddTask} colorScheme="blue" px={8}>
            Add Task
          </Button>
        </VStack>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <List width="100%">
            {tasks.map((task, index) => (
              <motion.div
                key={index}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ListItem display="flex" justifyContent="space-between" alignItems="center">
                  {task}
                  <IconButton
                    aria-label="Delete task"
                    icon={<FaTrash />}
                    onClick={() => handleDeleteTask(index)}
                    size="sm"
                    colorScheme="red"
                    variant="ghost"
                  />
                </ListItem>
              </motion.div>
            ))}
          </List>
        </motion.div>
      </VStack>
    </Container>
  );
};

export default Index;
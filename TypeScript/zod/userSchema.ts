import { z } from 'zod';

// Define the schema with Zod
const userSchema = z.object({
  name: z.string().nonempty("Name cannot be empty"),
  age: z
    .number()
    .int("Age must be an integer") // Ensure age is an integer
    .positive("Age must be positive") // Ensure age is positive
    .max(50, "Age must be 50 or below") // Ensure age is 50 or below
});

// Example data from user
const userData = {
  name: 'John',
  age: 30
};

// Validate the data
try {
  const validData = userSchema.parse(userData); // This will throw an error if validation fails
  console.log("Data is valid:", validData);

  // Write to DynamoDB or continue processing
  // e.g., dynamodbClient.putItem({ TableName: 'YourTable', Item: validData });
} catch (e) {
  if (e instanceof z.ZodError) {
    console.error("Validation errors:", e.errors); // Print validation errors if any
  }
}
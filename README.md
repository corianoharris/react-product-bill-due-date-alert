# Display Product Due Date Component

This is a React component that displays a formatted due date for a product. It uses `dayjs` for date formatting and `styled-components` for custom styling.

## Features

- **Date Formatting:** Formats the due date into a human-readable format.
- **Custom Styling:** Uses styled-components to style the displayed date.

## How It Works

### Dependencies

- **React:** Library for building user interfaces.
- **dayjs:** JavaScript library for date manipulation and formatting.
- **styled-components:** Library for styling React components with tagged template literals.

### Component Details

**`DisplayProductDueDate`**:

- **Imports:**
  - React for building the component.
  - `user` from `../MockData/userData` to get the due date.
  - `dayjs` for formatting the date.
  - `styled` from `styled-components` for styling.

- **Styled Component:**
  - **`StyledSpan`**: A styled `span` element with custom font size, color, and weight.

- **Date Extraction:**
  - Extracts and formats the due date into month, day, and year using `dayjs`.

- **Rendering:**
  - Displays the due date in the format "Month Day, Year" inside a styled `span`.


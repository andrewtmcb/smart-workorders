#!/bin/bash

#
# gold-standard-structure.sh
#
# A Bash script to generate a gold-standard, scalable frontend project
# structure for a multi-micro-UI application. This script promotes
# separation of concerns, modularity, and team collaboration.
#

echo "Starting gold-standard frontend project structure generation..."

# --- Environment Detection ---
# Check if running in a Windows environment and set commands accordingly
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" || "$OSTYPE" == "win32" ]]; then
    echo "Windows environment detected. Using mkdir and touch from Git Bash/WSL."
    MKDIR_CMD="mkdir -p"
    TOUCH_CMD="touch"
    # Navigate to the project root assuming the script is in frontend/scripts
    cd "$(dirname "$0")/../.."
else
    # Assume a standard Unix/Linux/macOS environment
    echo "Unix/Linux/macOS environment detected."
    MKDIR_CMD="mkdir -p"
    TOUCH_CMD="touch"
    # Navigate to the project root assuming the script is in frontend/scripts
    cd "$(dirname "$0")/../.."
fi

# Verify that the project root exists before proceeding.
if [ ! -d "." ]; then
    echo "Error: The script could not find the project root directory."
    echo "Please ensure you are running this script from 'frontend/scripts' within your project."
    read -p "Press Enter to exit..."
    exit 1
fi

SOURCE_DIR="src"
FEATURE_DIR="$SOURCE_DIR/features"

# --- Main Directories ---
echo "Creating top-level directories..."
$MKDIR_CMD "$SOURCE_DIR"
$MKDIR_CMD "$FEATURE_DIR"
$MKDIR_CMD "$SOURCE_DIR/common"
$MKDIR_CMD "$SOURCE_DIR/types"
$MKDIR_CMD "$SOURCE_DIR/styles"
$MKDIR_CMD "$SOURCE_DIR/assets"
$MKDIR_CMD "$SOURCE_DIR/api"
$MKDIR_CMD "$SOURCE_DIR/tests"

# --- Feature-Specific Directories ---
echo "Creating micro-UI feature directories..."
microUIs=("work-order" "template-manager")
for ui in "${microUIs[@]}"; do
    uiPath="$FEATURE_DIR/$ui"
    echo "  - Creating feature: $ui"
    
    subDirs=("components" "pages" "hooks" "api" "styles" "__tests__")
    for subDir in "${subDirs[@]}"; do
        $MKDIR_CMD "$uiPath/$subDir"
    done

    # Create a placeholder file to demonstrate the structure
    echo "# $ui Micro-UI" > "$uiPath/README.md"
done

# --- Placeholder Files for Clarity ---
echo "Adding placeholder files for clarity..."

# Placeholder for common components
cat << EOF > "$SOURCE_DIR/common/README.md"
### Common Components and Utilities
This folder contains reusable assets not specific to any single feature.
EOF
$TOUCH_CMD "$SOURCE_DIR/common/Button.jsx"

# Placeholder for data types/models
echo "export interface WorkOrder { /* ... */ }" > "$SOURCE_DIR/types/workOrder.d.ts"

# Placeholder for API data fetching
cat << EOF > "$SOURCE_DIR/api/README.md"
### Backend API Calls
This folder contains centralized logic for interacting with the backend API.
EOF
$TOUCH_CMD "$SOURCE_DIR/api/workOrderApi.js"

# Placeholder for styles
echo "/* Global CSS variables */" > "$SOURCE_DIR/styles/variables.css"

echo "Gold-standard project structure successfully generated."
echo "Remember to remove or modify the placeholder README files as you build your project."
echo "If the script failed, please provide the full error message for a precise fix."
read -p "Press Enter to exit..."
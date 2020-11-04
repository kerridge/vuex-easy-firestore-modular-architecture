# Get module name
MODULE_NAME=$1
TARGET_DIR=../../portal/src/store/modules/$MODULE_NAME

# if [ pwd ]

# Generate new module directory
mkdir $TARGET_DIR

# # Generate module files
cat ./templates/mutations.ts > $TARGET_DIR/mutations.ts
cat ./templates/state.ts > $TARGET_DIR/state.ts
cat ./templates/getters.ts > $TARGET_DIR/getters.ts
cat ./templates/actions.ts > $TARGET_DIR/actions.ts

REF_TYPE="doc"

echo "Enter firestore path: "
read FIRESTORE_PATH

# escape slashes
# TODO: make into function
FIRESTORE_PATH=`echo "${FIRESTORE_PATH//\//\\\/}"`

sed -e "s/<MODULE_NAME>/$MODULE_NAME/" -e "s/<FIRESTORE_REF_TYPE>/$REF_TYPE/" -e "s/<FIRESTORE_PATH>/$FIRESTORE_PATH/" <./templates/index.txt > $TARGET_DIR/index.ts

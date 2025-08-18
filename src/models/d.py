import os

# Get the current directory
current_directory = os.getcwd()

# List of file names without extensions
file_names = [
    "digitalization",
    "equipment",
    "management",
    "plantvisit",
    "product",
    "randd",
    "reports",
    "sustainability",
    "whitepaper"
]

# # Create files with .js and CommonUtils.js extensions
# for name in file_names:
#     # Create .js file
#     with open(os.path.join(current_directory, f"./src/models/{name}.js"), "w") as file:
#         file.write("// JavaScript code for " + name)

#     # Create CommonUtils.js file
#     with open(os.path.join(current_directory, f"./src/models/{name}CommonUtils.js"), "w") as file:
#         file.write("// JavaScript code for " + name + " Common Utils")

# print("Files created successfully.")

# Delete files with .js and CommonUtils.js extensions
for name in file_names:
    # Delete .js file
    if os.path.exists(os.path.join(current_directory, f"{name}.js")):
        os.remove(os.path.join(current_directory, f"{name}.js"))

    # Delete CommonUtils.js file
    if os.path.exists(os.path.join(current_directory, f"{name}CommonUtils.js")):
        os.remove(os.path.join(current_directory, f"{name}CommonUtils.js"))

print("Files deleted successfully.")

# Array
fruits = ["apple", "banana", "cherry"]
print(fruits)

# Array length
fruits = ["apple", "banana", "cherry"]
print(len(fruits))

# Loop ("line break at each component")
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)

# double loop
fruits = ["apple", "banana", "cherry"]
for x in fruits:
	for y in x:
  		print(y)
		  



# Find active passes
import bpy
for i in dir(bpy.context.scene.view_layers["ViewLayer"]):
    if i.startswith("use_pass_"):
        print(i)



# Create a cube


# Create a Render Layer node
import bpy
bpy.context.scene.node_tree.nodes.new('CompositorNodeRLayers')

# Create a Render Layer node and print the name
import bpy
ouais = bpy.context.scene.node_tree.nodes.new('CompositorNodeRLayers')
print(ouais.name)
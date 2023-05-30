Installations / Reference Material :
JDK

JRE

Cloudsim

Eclipse

Source Repository

Steps :
Install any of the IDE for running JAVA applications (eclipse recommended)
Install JDK and JRE for the same
Add the jdk\bin path to the environment variables Open environment variables window, add the following to the path variable
Do include your bin path wherever you have installed JDK
Mine is as  following :
> C:\Program Files\Java\jdk-14.0.1\bin
Open eclipse in your confined workspace
Click on new and open a new JAVA Project, give it a name
Create a package inside he src folder.
Dump in all the files "java files" inside the package.
Now right click on the project and choose configure build path.
Click on the libraries section and add external jars
Extract the Cloudsim.tar file you downloaded
Now import the jar files in that Cloudsim.tar into the external jars.
Do remeber to change the name of the package in all the source files.
Now right click on the project and run the project as JAVA Application.
Select the SJF_Scheduler.java file present in the list.
Done..!!
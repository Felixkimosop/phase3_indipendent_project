# PMy Mechanic App

This is a simple Ruby on Rails web application for users to easily access mechanics in the available locations. Users can create accounts, browse through available mechanics, leave reviews, and view other users' reviews.

## Getting Started

To get started with this app, clone the repository to your local machine:

### shell

$ git clone git@github.com:Felixkimosop/phase3_indipendent_project.git
Then, cd into the project directory and install the required gems:

shell
$ cd Mechanic-reviews
$ bundle install
Next, create the database and run the migrations:

ruby
$ rake db:create
$ rake db:migrate
Finally, start the Rake server:

### Features

This app includes the following features:

User authentication and account creation
Mechanic browsing and search
Mechanic reviews with star ratings and comments
Model Associations
This app uses the following Active Record association macros:

has_many and belongs_to to define the associations between User, Mechanic, and Review
has_many through to define the association between User and Mechanic through Review
Methods
The following methods are available in the models:

#### Review

user: returns the User instance for this Review
Mechanic: returns the Mechanic instance for this Review

#### Mechanic

reviews: returns a collection of all the Reviews for the Mechanic
users: returns a collection of all the Users who reviewed the Mechanic
leave_review(user, star_rating, comment): creates a new Review in the database associated with this Mechanic and the given User
print_all_reviews: prints each review for this Mechanic in the terminal
average_rating: returns a float representing the average star rating for all reviews for this Mechanic

#### User

reviews: returns a collection of all the Reviews that the User has given
Mechanic: returns a collection of all the Mechanic that the User has reviewed
favorite_Mechanic: returns the Mechanic instance that has the highest star rating from this User
remove_reviews(Mechanic): removes all of this User's reviews for the given Mechanic
Future Work
Some possible improvements to this app could include:

Adding pagination to the Mechanic and review lists to improve performance with large datasets
Implementing a more advanced search feature with filters and sorting options
Allowing users to edit their reviews after they've been submitted
Adding user avatars and other profile information
Implementing email confirmation and password reset functionality

### Contributing

Bug reports and pull requests are welcome on GitHub at git@github.com:Rawllings/Mechanic-review.git. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

### License

This project is available as open source under the terms of the MIT License. See the LICENSE file for more information.

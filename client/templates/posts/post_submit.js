Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

    Meteor.call('postInsert', post, function(error, result) {
    	//show error to usr and abort
    	if (error)
    		return alert(error.reason);

    	Router.go('postPage', {_id: result._id});
    });

    //post._id = Posts.insert(post);
  }
});
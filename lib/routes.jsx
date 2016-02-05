FlowRouter.route('/', {
    action(){
        ReactLayout.render(MainLayout, { content: <Home/>});
    }

});

FlowRouter.route('/registration', {
    name: 'registration',
    action(){
        ReactLayout.render(MainLayout, { content: <Registration/>});
    }
});

FlowRouter.route('/login', {
    name: 'login',
    action(){
        ReactLayout.render(MainLayout, { content: <Login/>});
    }
});

FlowRouter.route('/dashboard', {
    action(){
        ReactLayout.render(MainLayout, { content: <Dashboard/>});
    }
});

FlowRouter.route('/users', {
    action(){
        ReactLayout.render(MainLayout, { content: <Users/>});
    }
});

FlowRouter.route('/giraffe', {
   action(){
       let container = document.getElementById('react-root');
       ReactDOM.render(<span>giraffe</span>, container);
   }
});

let pathFor = ( path, params ) => {
    let query = params && params.query ? FlowRouter._qs.parse( params.query ) : {};
    return FlowRouter.path( path, params, query );
};

let urlFor = ( path, params ) => {
    return Meteor.absoluteUrl( pathFor( path, params ) );
};

let currentRoute = ( route ) => {
    FlowRouter.watchPathChange();
    return FlowRouter.current().route.name === route ? 'active' : '';
};

FlowHelpers = {
    pathFor: pathFor,
    urlFor: urlFor,
    currentRoute: currentRoute
};

/**
FlowRouter.route('/registration', {
    name: 'registration',
    action: function(p, q){
        FlowLayout.render('layout', { top: 'header', main: 'registration' });
    }
});

FlowRouter.route('/women', {
    name: 'women',
    subscriptions: function(params, q){
        this.register('women', Meteor.subscribe('allWomen'));
    },
    action: function(params, q){
        FlowLayout.render('layout', { top: 'header', main: 'women'});
    }
});

/**
FlowRouter.route('/', {
    subscriptions: function (params, queryParams) {
        this.register('posts', Meteor.subscribe('allPosts'));
    },
    action: function (params, queryParams) {
        FlowLayout.render('layout', { top: 'header', main: 'postsList' });
    },
    name: 'home'
});

FlowRouter.route('/blog/:postId', {
    subscriptions: function (params, queryParams) {
        this.register('post', Meteor.subscribe('singlePost', params.postId));
    },
    action: function (params, queryParams) {
        FlowLayout.render('layout', { top: 'header', main: 'singlePost' });
    },
    name: 'blog'
});
*/
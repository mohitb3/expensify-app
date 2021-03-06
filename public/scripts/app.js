'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
	_inherits(IndecisionApp, _React$Component);

	function IndecisionApp(props) {
		_classCallCheck(this, IndecisionApp);

		var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

		_this.handleDeleteOptionsArrow = function () {
			_this.setState(function () {
				return {
					options: []
				};
			});
		};

		_this.state = {
			subTitle: 'Have your life decided for you!',
			options: []
		};

		_this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
		_this.handlePick = _this.handlePick.bind(_this);
		_this.handleAddOption = _this.handleAddOption.bind(_this);
		_this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
		return _this;
	}

	_createClass(IndecisionApp, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			try {
				var options = JSON.parse(localStorage.getItem('options'));

				if (options) {
					this.setState(function () {
						return { options: options };
					});
				}
			} catch (e) {
				// Do nothing
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.options.length !== this.state.options.length) {
				var options = JSON.stringify(this.state.options);
				localStorage.setItem('options', options);
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			console.log('componentWillUnmount()');
		}
	}, {
		key: 'handleDeleteOptions',
		value: function handleDeleteOptions() {
			this.setState(function () {
				return {
					options: []
				};
			});
		}
	}, {
		key: 'handleDeleteOption',
		value: function handleDeleteOption(optionToRemove) {
			this.setState(function (prevState) {
				return {
					options: prevState.options.filter(function (option) {
						return option !== optionToRemove;
					})
				};
			});
		}
	}, {
		key: 'handlePick',
		value: function handlePick() {
			var randIndex = Math.floor(Math.random() * this.state.options.length);
			alert(this.state.options[randIndex]);
		}
	}, {
		key: 'handleAddOption',
		value: function handleAddOption(option) {
			if (!option) {
				return 'Enter valid value to add item';
			} else if (this.state.options.indexOf(option) > -1) {
				return option + ' already exists!';
			}
			this.setState(function (prevState) {
				return {
					options: prevState.options.concat(option)
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(Header, { subTitle: this.state.subTitle }),
				React.createElement(Action, {
					hasOptions: this.state.options.length > 0,
					handlePick: this.handlePick }),
				React.createElement(Options, {
					options: this.state.options,
					handleDeleteOption: this.handleDeleteOption,
					handleDeleteOptions: this.handleDeleteOptions,
					handleDeleteOptionsArrow: this.handleDeleteOptionsArrow }),
				React.createElement(AddOption, {
					handleAddOption: this.handleAddOption })
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

// IndecisionApp.defaultProps = {
// 	options: ['Eat']
// }

var Header = function Header(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			props.title
		),
		props.subTitle && React.createElement(
			'h2',
			null,
			props.subTitle
		)
	);
};

Header.defaultProps = {
	title: 'Indecision'
};

var Action = function Action(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{
				onClick: props.handlePick,
				disabled: !props.hasOptions },
			'What should I do?'
		)
	);
};

var Options = function Options(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ onClick: props.handleDeleteOptions },
			'Remove Options'
		),
		React.createElement(
			'button',
			{ onClick: props.handleDeleteOptionsArrow },
			'Remove Options Arrow Function'
		),
		props.options.length === 0 && React.createElement(
			'p',
			null,
			'Add some options!'
		),
		props.options.map(function (option) {
			return React.createElement(Option, {
				key: option,
				option: option,
				handleDeleteOption: props.handleDeleteOption });
		})
	);
};

var Option = function Option(props) {
	return React.createElement(
		'div',
		null,
		props.option,
		React.createElement(
			'button',
			{ onClick: function onClick(e) {
					return props.handleDeleteOption(props.option);
				} },
			'Remove'
		)
	);
};

var AddOption = function (_React$Component2) {
	_inherits(AddOption, _React$Component2);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this2.handleAddOption = function (e) {
			e.preventDefault();

			var option = e.target.elements.option.value.trim();
			var error = _this2.props.handleAddOption(option);
			_this2.setState(function () {
				return { error: error };
			});

			// clear the input if no error
			if (!error) {
				e.target.elements.option.value = '';
			}
		};

		_this2.state = {
			error: undefined
		};
		return _this2;
	}

	_createClass(AddOption, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				this.state.error && React.createElement(
					'p',
					null,
					this.state.error
				),
				React.createElement(
					'form',
					{ onSubmit: this.handleAddOption },
					React.createElement('input', { type: 'text', name: 'option' }),
					React.createElement(
						'button',
						null,
						'Add Option'
					)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

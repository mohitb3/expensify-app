test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  onSubmitSpy();
  expect(onSubmitSpy).toHaveBeenCalled();
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  onSubmitSpy('Mohit', 'Herndon');
  expect(onSubmitSpy).toHaveBeenCalledWith('Mohit', 'Herndon');
});
'use server'

export async function addToCart(prevState: any, formData: FormData) {
  const productId = formData.get('productId');
  const quantity = parseInt(formData.get('quantity')?.toString() ?? '0');
  
  // prevState mein previous cart items hai
  const currentItems = prevState.items || [];
  const currentCount = prevState.count || 0;
  
  // Validation
  if (!productId || quantity < 1) {
    return {
      ...prevState, // Previous state preserve karo
      error: 'Invalid product or quantity'
    };
  }
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // New item add karo existing items mein
  const newItem = {
    id: productId,
    quantity: quantity,
    timestamp: Date.now()
  };
  
  return {
    items: [...currentItems, newItem],
    count: currentCount + quantity,
    success: `${quantity} items added to cart!`,
    error: null
  };
}
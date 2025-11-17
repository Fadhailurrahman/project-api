export const getRecommendation = (req, res) => {
    const { id } = req.params;
  
    res.json({
      status: "success",
      message: "Recommendation loaded",
      data: {
        customer_id: id,
        recommended_offer: "Unlimited Max",
        confidence: 0.85
      }
    });
  };
  